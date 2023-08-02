import React from "react";
import ProgressBar from "../../components/ProgressBar";
import LearnCardData from "../../data/LearnCard";
import { NavLink } from "react-router-dom";

const Learn = () => {

	const MainProgressBarCSS = {
		bgLine: "bg-blue px-1 h-5 dark:bg-darkBlue",
		frontLine: "bg-darkBlue h-3 dark:bg-blue2",
		text: "text-darkBlue  text-2xl font-semibold mt-2 dark:text-blue2",
		width: 60,
	};

	const CardProgressBarCSS = {
		bgLine: "bg-darkBlue px-0.5 h-3 md:h-4 md:px-1 dark:bg-blue",
		frontLine: "bg-blue h-2 md:h-2 dark:bg-darkBlue",
		text: "text-darkBlue  text-md font-semibold mt-0.5 dark:text-blue2",
		width: 80,
	};
	return (
		<>
			<section className=" bg-blue2 px-[5%] md:px-[10%] flex flex-col items-center justify-center dark:bg-dark ">
				<div className="pt-[110px] text-center lg:pt-[120px]">
					<h1 className="text-blue font-bold text-4xl md:text-5xl dark:text-white ">
						Choose a topic
					</h1>
					<p className="text-darkBlue font-semibold text-lg mt-5 mb-3 dark:text-blue2">
						Overall Progress
					</p>
				</div>
				<div className="w-[90%]">
					<ProgressBar progressBarCSS={MainProgressBarCSS} />
				</div>
			</section>

			<section className=" bg-blue2 px-[5%] md:px-[10%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-14 md:gap-10 gap-5 py-10 lg:py-[50px] dark:bg-dark">
				{LearnCardData.map((ele, idx) => {
					return (
						<NavLink
							to={ele.link}
							key={idx}
							className="bg-blue5 px-5 py-5 lg:py-8 lg:px-8 rounded-xl flex flex-col items-center justify-center dark:bg-dark4 hover:scale-105 hover:drop-shadow-2xl ease-in-out duration-200 cursor-pointer"
						>
							<div className="bg-blue3 p-7 rounded-lg lg:p-[25%] dark:bg-blue">
								<img src={ele.img} alt="code SVG" />
							</div>
							<p className="text-md lg:text-lg text-center font-bold text-darkBlue mt-3 mb-3 lg:mt-6 dark:text-blue2">
								{ele.title}
							</p>
							<div className="w-[100%]">
								<ProgressBar progressBarCSS={CardProgressBarCSS} />
							</div>
						</NavLink>
					);
				})}
			</section>
		</>
	);
};

export default Learn;
