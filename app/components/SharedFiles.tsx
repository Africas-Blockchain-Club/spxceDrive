import React, { ReactElement, useEffect, useState } from "react";
import spxceContract from "../web3Utils/contract/contract";
import web3Instance from "../web3Utils/webInstance";
import { ipfsDownloadFile, ipfsgetFile } from "../storage/ipfs";
import DownloadButton from "./DownloadButton";
import ShareButton from "./ShareButton";


class FileObject {
	cid: string;
	key: string;
	name: string;
	type: string;
	size: any;
	accessors: string[];
	requestID: string;
	constructor(cid: string, key: string, name: string, type: string, size: any, requestID: string, accessors: string[]) {
		this.cid = cid;
		this.key = key;
		this.name = name;
		this.type = type;
		this.size = size;
		this.requestID = requestID;
		this.accessors = accessors;
	}


}

const FileTile = (props: { name: string, size: any, type: string, cid: string, encryptionKey: string, accessors: string[] }) => {

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
			</td>
		</tr>
	)
}


const SharedFiles = () => {
	const [sharedfiles, setSharedfiles] = useState<Array<FileObject>>([]);

	useEffect(() => {
		getFiles();
	}, []);

	const getFiles = async () => {
		try {
			const accounts = await web3Instance.eth.requestAccounts();
			const _files: Array<any> = await spxceContract().methods.getSharedFiles().call({ from: accounts[0] });
			// console.log(_files);
			console.log("contract shared files in Files comp : ", _files);
			const filePromises = _files.map(async (fileItem) => {
				// console.log("File CID : ", fileItem);
				const file = await ipfsgetFile(fileItem[1]);
				// console.log("A shared file : ", file);
				return new FileObject(file.cid, fileItem[2], file.name, file.type, file.size, file.requestid, fileItem[3]);
			});

			const resolvedFiles: any = await Promise.all(filePromises);

			setSharedfiles(resolvedFiles);
		} catch (error) {
			console.error('Error fetching files:', error);
		}
	};

	const renderFile = () => {
		const _files: any = []
		sharedfiles.map((file, index) => {
			_files.push(<FileTile name={file.name} size={file.size} type={file.type} cid={file.cid} encryptionKey={file.key} key={index} accessors={file.accessors} />)
		});

		return _files;
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


export default SharedFiles;