import { useState } from "react"
import Files from "./Files"
import UploadFileInput from "./UploadFileInput"
import SharedFiles from "./SharedFiles";
import SideBar from "./SideBar";

const MainContainer = () => {
	const [screenIndex, setScreenIndex] = useState(0);

	const toggleScreenIndex = (index: number) => {
		console.log(index);
		setScreenIndex(index);
	}


	return (
		<div className="flex h-screen  w-screen fixed top-0  bg-gradient-to-r from-violet-50 to-pink-100 ">
			<SideBar onClick={toggleScreenIndex} />


			<div className="flex flex-col flex-1  overflow-y-auto w-3/4">
				<div className="flex items-center justify-center m-6 rounded-md h-16 bg-white bg-opacity-70 relative">
					<div className="flex items-center px-4 w-5/6">

						<input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
					</div>
					<div className="flex items-center pr-4">


					</div>
				</div>
				<div className="p-4">
					{(screenIndex == 0) ? <Files /> : <SharedFiles />}
				</div>
			</div>

		</div>)
}

export default MainContainer;