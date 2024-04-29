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
			<div className="hidden md:flex flex-col w-1/6 bg-gray-800  h-screen top-0">
				<div className="flex items-center justify-center h-16 bg-white">
					<span className="text-primary font-bold ">SPxCEDRiVE</span>
				</div>
				<div className="flex flex-col flex-1 overflow-y-auto">
					<nav className="flex-1 px-2 py-4 bg-white">
						<a href="#">
							<UploadFileInput />
						</a>
						<a href="#"
							className={`flex items-center px-4 py-2 mt-2 rounded-md  hover:bg-gray-100 ${ (screenIndex == 0)  ? "text-neutral" : "text-gray-400"}`}
							onClick={() => {
								toggleScreenIndex(0);
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="h-6 w-6 mr-2" viewBox="0 0 576 512"><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H230.4l-31.3-52.2c-4.1-6.8-2.6-15.5 3.5-20.5L288 368l-60.2-82.8c-10.9-15 8.2-33.5 22.8-22l117.9 92.6c8 6.3 8.2 18.4 .4 24.9L288 448l38.4 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32z"/></svg>
							My files
						</a>
						<a href="#"
							className={`flex items-center px-4 py-2 mt-2 rounded-md  hover:bg-gray-100 ${ (screenIndex == 1)  ? "text-neutral" : "text-gray-400"}`}
							onClick={() => {
								toggleScreenIndex(1);
							}}
						>
							<svg className="h-6 w-6 mr-2" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M41 7C31.6-2.3 16.4-2.3 7 7S-2.3 31.6 7 41l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L41 7zM599 7L527 79c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0zM7 505c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 471c-9.4 9.4-9.4 24.6 0 33.9zm592 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM212.1 336c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-.5-1.4-1-2.7-1.6-4c-9.4-22.3-29.8-38.9-54.3-43c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-.8 .1-1.7 .3-2.5 .5c-24.9 5.1-45.1 23-53.4 46.5zM175.8 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-26.5 32C119.9 256 96 279.9 96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3zm368 80c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6h56.1zM464 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
							Shared with me
						</a>
						{/* <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100  rounded-md  hover:bg-gray-700">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
							Settings
						</a> */}
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
					{(screenIndex == 0) ? <Files /> : <SharedFiles />}
				</div>
			</div>

		</div>)
}

export default MainContainer;