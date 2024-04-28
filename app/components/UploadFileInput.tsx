import React, { useState } from "react";
import { ipfsUploadFile } from "../storage/ipfs";
import spxceContract from "../web3Utils/contract/contract";
import web3Instance from "../web3Utils/webInstance";

const UploadFileInput = () => {
	const [file, setFile] = useState<File | null>(null)

	const selectFile = async (file: File) => {
		if (file) {
			setFile(file);

			// upload file to ipfs
			const requestID = await ipfsUploadFile(file);


			const accounts = await web3Instance.eth.requestAccounts();

			// create file access control in smart contract
			await spxceContract().methods.addFile(requestID, "file encryption key").send(
				{
					from: accounts[0],
					gasPrice: '1000000000', // Example gas price in wei (adjust as needed)
					gas: '3000000'
				}
			)
		}
	}

	return (
		<div className="bg-white text-[#333] flex items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-1 min-w-[300px] w-max font-[sans-serif] rounded-md overflow-hidden my-8 mx-auto">
			<div className="px-4 flex">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 612.675 612.675">
					<path d="M581.209 223.007 269.839 530.92c-51.592 51.024-135.247 51.024-186.839 0-51.592-51.023-51.592-133.737 0-184.761L363.248 69.04c34.402-34.009 90.15-34.009 124.553 0 34.402 34.008 34.402 89.166 0 123.174l-280.249 277.12c-17.19 17.016-45.075 17.016-62.287 0-17.19-16.993-17.19-44.571 0-61.587L394.37 161.42l-31.144-30.793-249.082 246.348c-34.402 34.009-34.402 89.166 0 123.174 34.402 34.009 90.15 34.009 124.552 0l280.249-277.12c51.592-51.023 51.592-133.737 0-184.761-51.593-51.023-135.247-51.023-186.839 0L36.285 330.784l1.072 1.071c-53.736 68.323-49.012 167.091 14.5 229.88 63.512 62.79 163.35 67.492 232.46 14.325l1.072 1.072 326.942-323.31-31.122-30.815z" data-original="#000000" />
				</svg>
				<p className="text-sm ml-3">{(file) ? file.name : "No File Selected"}</p>
			</div>
			<label htmlFor="uploadFile1" className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-3 py-2.5 outline-none rounded-md cursor-pointer ml-auto w-max block">Upload</label>
			<input type="file" id='uploadFile1' className="hidden" onChange={(e) => selectFile(e.target.files![0])} />
		</div>
	)
}


export default UploadFileInput;