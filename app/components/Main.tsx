import { useState } from "react"
import Files from "./Files"
import UploadFileInput from "./UploadFileInput"
import SharedFiles from "./SharedFiles";

const MainContainer = () => {
	const [screenIndex, setScreenIndex] = useState(0);

	const toggleScreenIndex = (index: number) => {
		setScreenIndex(index);
	}


	return (
		<div className="flex h-screen bg-gray-100 w-screen fixed top-0">
			<div className="hidden md:flex flex-col w-1/6 bg-gray-800 h-screen top-0">
				<div className="flex items-center justify-center h-16 bg-gray-900">
					<span className="text-white font-bold uppercase">Sidebar</span>
				</div>
				<div className="flex flex-col flex-1 overflow-y-auto">
					<nav className="flex-1 px-2 py-4 bg-gray-800">
						<a href="#"
							className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
							onClick={() => {
								toggleScreenIndex(0);
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16" />
							</svg>
							Owned Files
						</a>
						<a href="#"
							className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
							onClick={() => {
								toggleScreenIndex(1);
							}}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M6 18L18 6M6 6l12 12" />
							</svg>
							Shared With Me
						</a>
						<a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
							Settings
						</a>
					</nav>
				</div>
			</div>


			<div className="flex flex-col flex-1 overflow-y-auto w-3/4">
				<div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 relative">
					<div className="flex items-center px-4 w-5/6">
						<button className="text-gray-500 focus:outline-none focus:text-gray-700">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
						<input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
					</div>
					<div className="flex items-center pr-4">

						<button
							className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
							</svg>
						</button>
					</div>
				</div>
				<div className="p-4">
					<UploadFileInput />
					{(screenIndex == 0) ? <Files /> : <SharedFiles />}
				</div>
			</div>

		</div>)
}

export default MainContainer;