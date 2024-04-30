import { useRef, useState } from "react";
import spxceContract from "../web3Utils/contract/contract";
import web3Instance from "../web3Utils/webInstance";

const ShareButton = (props: { requestID: string, encryptionKey: string }) => {
	// const [shareAccount, setShareAccount] = useState("");
	const addressInputRef = useRef<HTMLInputElement>(null);

	console.log("Share button Props : {", props.requestID, "}" );


	const share = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const accounts = await web3Instance.eth.requestAccounts();
		console.log("Account : ", accounts[0]);
		const sharedAccount = addressInputRef.current?.value;
		console.log("Shared Request ID", props.requestID);
		// console.log(props.cid);
		// console.log(props.encryptionKey);
		await spxceContract().methods.shareFile(sharedAccount, props.requestID, props.encryptionKey).send(
			{
				from: accounts[0],
				gasPrice: '1000000000', // Example gas price in wei (adjust as needed)
				gas: '3000000'

			}
		);
	}

	// const onAccountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setShareAccount(event.target.value);
	// 	console.log(shareAccount)
	// }

	return (<>
		<button
			onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}
			className="px-4 py-3 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 bg-primary transition-transform mx-5 flex items-center">
			<svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z" /></svg>
			{/* <span className="ml-2">Share</span> */}
		</button>

		<dialog id="my_modal_3" className="modal bg-transparent ">
			<div className="modal-box">

				<div className="relative w-full max-h-full">
					<div className="relative bg-white rounded-lg  dark:bg-gray-700">
						<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
							</h3>
							<form method="dialog">
								{/* if there is a button in form, it will close the modal */}
								<button className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
									<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
									</svg>
									<span className="sr-only">Close modal</span>
								</button>
								{/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
							</form>
						</div>
						<div className="p-4 md:p-5">
							<form className="space-y-4" onSubmit={share} >
								<div>
									{/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
									<input
										type="text"
										name="address"
										id="address"
										ref={addressInputRef}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
										placeholder="0x4B"
										// onChange={onAccountChange}
										required />
								</div>

								<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Share</button>

							</form>
						</div>
					</div>
				</div>
			</div>
		</dialog>

		{/* <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
			<div className="relative p-4 w-full max-w-md max-h-full">
				<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
					<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
						</h3>
						<button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
							<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>
					<div className="p-4 md:p-5">
						<form className="space-y-4" action="#">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
								<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
								<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
							</div>
							<div className="flex justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
									</div>
									<label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
								</div>
								<a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
							</div>
							<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
							<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
								Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
							</div>
						</form>
					</div>
				</div>
			</div> */}
		{/* </div> */}
	</>);
}

export default ShareButton;