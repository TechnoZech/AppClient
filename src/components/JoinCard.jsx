import React from "react";
import './JoinCardStyles.css';

const JoinCard = (props) => {
	
	const {title, para, btn, btnLink, bgColors} = props.cardData;
	return (
		<>
			<div className={`px-[5%] pb-20  md:px-[10%] ${bgColors}`}>
            
				<div className="bgg flex flex-col items-center justify-center bg-blue px-5 py-10  rounded-xl">
					<h1 className="text-white font-bold text-3xl md:text-4xl">{title}</h1>
					<p className="text-white font-medium pb-5">{para}</p>
					<a
						className="font-medium flex items-center justify-center border-2 border-white rounded-sm py-2.5 px-10 mt-2 mx-auto w-[15rem] bg-white text-black hover:text-white hover:border-black hover:bg-black ease-in-out duration-300 "
						href={btnLink}
					>
						{btn}
					</a>
				</div>
			</div>
		</>
	);
};

export default JoinCard;
