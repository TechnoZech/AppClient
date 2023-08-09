import React, { useEffect, useState } from "react";

const ProgressBar = (props) => {
	const {bgLine, frontLine, text, width} = props.progressBarCSS;
	// console.log(bgLine);
	// console.log(props.progressBarCSS);
	return (
		<>
			<section>
				<div className={` rounded-full flex justify-start items-center ${bgLine} basis-6/12`}>
					<div className={`${frontLine} rounded-full w-[${width}%]`} style={{width: `${width}%`}}></div>
					{/* <div className= 'bg-dark2 h-3 rounded-full w-[67%]'></div> */}
				</div>
				<p className= {`text-center ${text}`}>{width}%</p>
			</section>
		</>
	);
};

export default ProgressBar;
