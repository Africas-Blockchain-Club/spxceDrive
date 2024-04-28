import { useState } from "react";


const DownloadButton = (props: { fileName: string, cid: string }) => {
	const [downloadProgress, setDownloadProgress] = useState(0);
	const baseUrl = "https://spxcedrive-gateway.quicknode-ipfs.com/ipfs";
	const fileUrl = `${baseUrl}/${props.cid}`;

	const download = async () => {
		try {
			const response = await fetch(fileUrl);

			if (!response.ok) {
				throw new Error('Failed to fetch file');
			}

			const totalSize = parseInt(response.headers.get('content-length')!) || 0;
			let downloadedSize = 0;
			const chunks = [];

			const reader = response.body!.getReader();

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;

				chunks.push(value);
				downloadedSize += value.length;
				const progress = (downloadedSize / totalSize) * 100;
				setDownloadProgress(progress);
			}

			const concatenatedChunks = new Uint8Array(downloadedSize);
			let offset = 0;
			for (const chunk of chunks) {
				concatenatedChunks.set(chunk, offset);
				offset += chunk.length;
			}

			const blob = new Blob([concatenatedChunks]);
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = props.fileName;
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
			document.body.removeChild(a);
		} catch (error) {
			console.error('Error downloading file:', error);
		}
	};

	const buttonStyle = {
		backgroundColor: `rgba(0, 0, 255, ${(downloadProgress / 100) * 0.6 + 0.4})`, // Adjust the opacity based on progress (initially blue)
	};

	return (
		<button
			type="button"
			className="px-4 py-3 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
			onClick={download}
			style={buttonStyle}
		>
			<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
			</svg>
			{/* <span className="ml-2">Download</span> */}
			<div className="relative pt-1">
				<div className="absolute top-0 left-0 h-2 bg-indigo-600" style={{ width: `${downloadProgress}%` }}></div>
			</div>
		</button>
	);
};

export default DownloadButton;