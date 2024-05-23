import React from 'react';



const SideBar = (props: { onClick: Function }) => {
	return (
		<div className="min-h-screen ">
			<div className="ml-6 flex w-16 flex-col items-center space-y-10 py-6">
				<div className="flex items-center justify-center rounded-md bg-white p-4 text-blue-600 bg-opacity-70" >
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8 cursor-pointer">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
					</svg>
				</div>

				<div className="space-y-12   rounded-md bg-white bg-opacity-70">
					<ul>
						<li className="p-5"
							onClick={() => { props.onClick(0) }}
						>
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600">
								<path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
								<path d="M15 18H9" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
							</svg>
						</li>
						<li className="p-5"
							onClick={() => { props.onClick(1) }}>
							<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600">

								<g fill="none" fill-rule="evenodd">
									<path d="m0 0h32v32h-32z" />
									<path d="m17.0058746 2c.5522848 0 1 .44771525 1 1 0 .51283584-.3860402.93550716-.8833788.99327227l-.1166212.00672773h-10.0058746c-1.59768088 0-2.90366088 1.24891996-2.99490731 2.82372721l-.00509269.17627279v18c0 1.5976809 1.24891996 2.9036609 2.82372721 2.9949073l.17627279.0050927h18c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-9.9962769c0-.5522847.4477153-1 1-1 .5128358 0 .9355072.3860402.9932723.8833789l.0067277.1166211v9.9962769c0 2.6887547-2.1223067 4.8818181-4.7831104 4.9953805l-.2168896.0046195h-18c-2.6887547 0-4.88181811-2.1223067-4.99538049-4.7831104l-.00461951-.2168896v-18c0-2.6887547 2.12230671-4.88181811 4.78311038-4.99538049l.21688962-.00461951zm11.9941254 0c.5522847 0 1 .44771525 1 1v7c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1l-.0001746-4.587-10.0708932 10.0722814c-.3905243.3905243-1.0236893.3905243-1.4142136 0s-.3905243-1.0236893 0-1.4142136l10.0701068-10.0710678h-4.5848254c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1z" fill="#000000" fill-rule="nonzero" />
								</g>
							</svg>
						</li>
						<li className="p-5">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
							</svg>
						</li>
						<li className="p-5">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
							</svg>
						</li>
						<li className="p-5">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
							</svg>
						</li>
						<li className="p-5">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</li>
					</ul>
					<div className="flex items-center justify-center pb-5">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 cursor-pointer text-gray-500 hover:text-blue-600">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;