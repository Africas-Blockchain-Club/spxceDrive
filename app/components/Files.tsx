import React, { ReactElement, useEffect, useState } from "react";
import spxceContract from "../web3Utils/contract/contract";
import web3Instance from "../web3Utils/webInstance";
import { ipfsDownloadFile, ipfsgetFile } from "../storage/ipfs";
import DownloadButton from "./DownloadButton";
import ShareButton from "./ShareButton";
import Peers from "./Peers";


class FileObject {
	cid: string;
	key: string;
	name: string;
	type: string;
	size: any;
	accessor: string[];
	requestID: string;
	constructor(cid: string, key: string, name: string, type: string, size: any, requestID: string, accessor: string[]) {
		this.cid = cid;
		this.key = key;
		this.name = name;
		this.type = type;
		this.size = size;
		this.requestID = requestID;
		this.accessor = accessor;
	}


}

const FileTile = (props: { name: string, size: any, type: string, cid: string, encryptionKey: string, requestID: string, accessor: string[] }) => {
	console.log(props.name);
	console.log(props.requestID);
	
	const download = async () => {
		console.log("download")
		await ipfsDownloadFile(props.cid, props.name);
	}

	return (
		<tr className="bg-white dark:bg-gray-800 relative">
			<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
				{props.name}
			</th>
			<td className="px-6 py-4">
				{(props.size / (1024 * 1024)).toFixed(2)} MB
			</td>
			<td className="px-6 py-4">
				{props.type}
			</td>
			<td className="px-6 py-4">
				<td className="px-6 py-4">
					<div className="dropdown">
						<DownloadButton fileName={props.name} cid={props.cid} />
					</div>
				</td>
			</td>
			<td className="px-6 py-4">
				<ShareButton requestID={props.requestID} encryptionKey={props.encryptionKey} />
			</td>
			<td>
				<Peers cid={props.cid} peers={props.accessor} />
			</td>
		</tr>
	)
}


const Files = () => {
	const [files, setFiles] = useState<Array<FileObject>>([]);

	useEffect(() => {
		getFiles();
	}, []);

	const getFiles = async () => {
		try {
			const accounts = await web3Instance.eth.requestAccounts();
			const _files: Array<any> = await spxceContract().methods.getFiles().call({ from: accounts[0] });
			console.log("contract files in Files comp : ", _files);
			const filePromises = _files.map(async (fileItem) => {
				const file = await ipfsgetFile(fileItem[1]);
				
				// console.log("Files Request ID : ", file)

				// console.log("File Item From Contract : ", fileItem);

				return new FileObject(file.cid, fileItem[2], file.name, file.type, file.size, file.requestId, fileItem[3]);
			});

			const resolvedFiles: any = await Promise.all(filePromises);

			setFiles(resolvedFiles);
		} catch (error) {
			console.error('Error fetching files:', error);
		}
	};

	const renderFile = () => {
		return files.map((file, index) => (
			<FileTile
				name={file.name}
				size={file.size}
				type={file.type}
				cid={file.cid}
				encryptionKey={file.key}
				requestID={file.requestID}
				key={index}
				accessor={file.accessor}
			/>
		));
	};

	return (
		<div className="">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 h-auto">
					<tr>
						<th scope="col" className="px-6 py-3">
							File
						</th>
						<th scope="col" className="px-6 py-3">
							Size
						</th>
						<th scope="col" className="px-6 py-3">
							Type
						</th>
						<th scope="col" className="px-6 py-3">

						</th>
						<th scope="col" className="px-6 py-3">

						</th>
					</tr>
				</thead>
				<tbody>{renderFile()}</tbody>
			</table>
		</div>
	);
};


export default Files;