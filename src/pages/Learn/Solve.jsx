import React from "react";
import ProgressBar from "../../components/ProgressBar";
import SolveQuestionsData from "../../data/SolveQuestionsData";
import playIcon from "../../assets/play.svg";
const Solve = () => {
	const progressBarCSS = {
		bgLine: "bg-white px-1 h-4 dark:bg-darkBlue",
		frontLine: "bg-blue7 h-2.5 dark:bg-blue2",
		text: "text-white text-sm lg:text-md font-medium dark:text-blue2",
		width: 80,
	};
	return (
		<>
			{/* <-------------- SideBar --------------> */}

			<section className="bg-blue w-screen h-[60%] fixed lg:h-screen z-5 lg:w-[35%] p-5 dark:bg-dark2">
				<div className=" bg-blue7 p-3 rounded-lg flex flex-col items-center justify-center mt-[70px] dark:bg-dark3">
					<h1 className="text-white text-lg lg:text-2xl font-semibold mb-3">Recursion</h1>
					<div className="w-[80%]">
						<ProgressBar progressBarCSS={progressBarCSS} />
					</div>
				</div>

				<div className="mt-5 flex flex-col gap-3 h-[55%] lg:h-[72%] overflow-y-auto">
					{SolveQuestionsData.map((ele, idx) => {
						return (
							<div
								key={idx}
								className="flex gap-4 justify-between items-center group"
							>
								<div className="bg-blue7 rounded-md flex items-center px-3.5 h-[40px] dark:bg-dark3 ease-in-out duration-200 group-hover:bg-blue5 dark:group-hover:bg-blue">
									<img src={ele.icon} alt="brackets" />
								</div>
								<div className="bg-blue7 rounded-md flex items-center px-3.5 w-[90%] h-[40px] cursor-pointer ease-in-out duration-200 group-hover:bg-blue5  dark:bg-dark3 dark:group-hover:bg-blue">
									<p className="text-white lg:text-md text-sm font-medium">
										{ele.question}
									</p>
								</div> 
							</div>
						);
					})}
				</div>
			</section>
			{/* <-------------- Main Section --------------> */}
			<section className="bg-blue2 lg:h-screen fixed top-[60%] w-screen h-[40%] lg:top-0 lg:right-[0%] lg:w-[65%] z-5 lg:z-10 flex flex-col items-center justify-between dark:bg-dark">
				<div className="flex items-center justify-between mt-6 lg:mt-[90px] w-[100%]">
					<div className="w-[100%] px-[10%] flex flex-col items-center justify-center gap-5 lg:gap-14 mt-[10px]">
						<div className="flex flex-col gap-6 items-center justify-center border-4 py-[23%] md:py-[10%] md:px-[25%] lg:px-[45%] lg:py-[28%] px-[45%] rounded-xl border-blue relative ">
							<div className="absolute flex flex-col">
								<img className="h-[30px] lg:h-[80px] mb-2 lg:mb-5" src={playIcon} alt="playIcon" />
								<p className="text-blue text-sm lg:text-xl font-semibold">
									Video tutorial coming soon...
								</p>
							</div>
							<iframe
								className="absolute top-0 left-0 w-[100%] h-[100%] p-5"
								title="YouTube video player"
								src="https://www.youtube.com/embed/mH0W8Py6mD0"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope;"
								allowfullscreen
							></iframe>
						</div>

						<div className=" flex flex- items-center justify-center gap-2 lg:gap-10 ">
							<div className="group cursor-pointer bg-blue2 border-blue border-2 rounded-md flex items-center justify-center gap-3 h-10 w-[120px] lg:w-[160px] hover:bg-blue dark:bg-dark dark:hover:bg-blue  ease-in-out duration-200 ">
								<p className="text-blue text-sm lg:text-lg font-medium group-hover:text-white dark:group-hover:text-white">
									Bookmark
								</p>
								<i class="fa-regular fa-bookmark text-blue group-hover:text-white dark:group-hover:text-white"></i>
							</div>

							<div className="group cursor-pointer bg-blue2 border-blue border-2 rounded-md flex items-center justify-center gap-2 h-10 w-[100px] lg:w-[120px] hover:bg-blue dark:bg-dark dark:hover:bg-blue  ease-in-out duration-200 ">
								<p className="text-blue text-sm lg:text-lg font-medium group-hover:text-white dark:group-hover:text-white">
									Mark
								</p>
								<i class="fa-solid fa-check text-blue group-hover:text-white dark:group-hover:text-white"></i>
							</div>

							<div className=" cursor-pointer bg-blue border-blue border-2 rounded-md flex items-center justify-center gap-3 h-10 w-[100px] lg:w-[120px] dark:bg-blue hover:bg-blue7 hover:border-blue7  dark:hover:bg-blue7 dark:hover:border-blue7 hover:scale-105 ease-in-out duration-200">
								<p className="text-white text-sm lg:text-lg font-medium">Solve</p>
								<i class="fa-solid fa-link text-white "></i>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="flex items-center justify-between mb-[100px]"></div> */}
			</section>
		</>
	);
};

export default Solve;
