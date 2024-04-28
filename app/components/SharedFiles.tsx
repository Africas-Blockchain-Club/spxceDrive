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
	requestID: string;
	constructor(cid: string, key: string, name: string, type: string, size: any, requestID: string) {
		this.cid = cid;
		this.key = key;
		this.name = name;
		this.type = type;
		this.size = size;
		this.requestID = requestID;
	}


}

const FileTile = (props: { name: string, size: any, type: string, cid: string, encryptionKey: string }) => {

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
				{props.size}
			</td>
			<td className="px-6 py-4">
				{props.type}
			</td>
			<td className="px-6 py-4">
				<td className="px-6 py-4">
					<div className="dropdown">
						<DownloadButton fileName={props.name} cid={props.cid} />

						{/* <button
							type="button"
							className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
							onClick={download}
						>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
							</svg>

							<span className="ml-2">Download</span>
						</button> */}
						{/* {/* 
						<button tabIndex={0} role="button" className="btn btn-circle">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
						</button> 
						<button tabIndex={0} role="button" className="btn btn-square btn-ghost">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
						</button>

						<ul className="ml-4 dropdown-content absolute  z-20 menu bg-white rounded-box shadow-md">
							<li onClick={download}>
								<a className="tooltip tooltip-right" data-tip="Download">
									<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
									</svg>
								</a>
							</li>
							<li>
								<a className="tooltip tooltip-right" data-tip="Details">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
								</a>
							</li>
							<li>
								<a className="tooltip tooltip-right" data-tip="Stats">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
								</a>
							</li>
						</ul> */}
					</div>
				</td>
			</td>
			<td className="px-6 py-4">
				<ShareButton cid={props.cid} encryptionKey={props.encryptionKey} />
			</td>
		</tr>
	)
}


const SharedFiles = () => {
	const [files, setFiles] = useState<Array<FileObject>>([]);

	useEffect(() => {
		getFiles();
	}, []);

	const getFiles = async () => {
		try {
			const accounts = await web3Instance.eth.requestAccounts();
			const _files: Array<any> = await spxceContract().methods.getSharedFiles().call({ from: accounts[0] });

			const filePromises = _files.map(async (fileItem) => {
				const file = await ipfsgetFile(fileItem[1]);

				return new FileObject(file.cid, fileItem[2], file.name, file.type, file.size, file.requestid);
			});

			const resolvedFiles: any = await Promise.all(filePromises);

			setFiles(resolvedFiles);
		} catch (error) {
			console.error('Error fetching files:', error);
		}
	};

	const renderFile = () => {
		return files.map((file, index) => (
			<FileTile name={file.name} size={file.size} type={file.type} cid={file.cid} encryptionKey={file.key} key={index} />
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


export default SharedFiles;