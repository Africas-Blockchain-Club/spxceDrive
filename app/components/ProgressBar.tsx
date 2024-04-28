const ProgressBar = (props: { progress: any }) => (
	<div className="relative pt-1">
		<div className="flex h-2 mb-4 overflow-hidden text-xs bg-blue-200 rounded">
			<div
				style={{ width: `${props.progress}%` }}
				className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
			></div>
		</div>
	</div>
);

export default ProgressBar;