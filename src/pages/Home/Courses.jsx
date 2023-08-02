import React from "react";
import { NavLink } from "react-router-dom";
import checkMark from "../../assets/Check Mark.svg";
import CourseCardData from "../../data/CourseCardData";
import JoinCard from "../../components/JoinCard";

const Courses = () => {
	const cardData = {
		title: 'Join the Community',
		para: 'and unleash your coding prowess',
		btn: 'Join Now',
		btnLink: '/',
		bgColors: 'bg-blue2 dark:bg-dark'
	}
	return (
		<>
			<div id="Courses" className="px-[5%] bg-blue2 py-20 text-center lg:px-[10%] dark:bg-dark">
				<h1 className="font-bold text-2xl text-black pt-2 pb-3  md:text-5xl md:pb-5 dark:text-white">
					EXPLORE OUR COURSES
				</h1>
				<p className="font-medium text-md text-blueGrey mb-10 dark:text-white md:pb-10">
					Discover endless learning possibilities with our diverse and enriching
					course selection.
				</p>

				<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
					{CourseCardData.map((data, idx) => {
						return (
							<div key={idx} className=" bg-blue3 px-5 py-10 rounded-xl flex flex-col items-center justify-center dark:bg-dark2">
								<h2 className="font-bold text-2xl text-black pb-3  md:text-3xl md:pb-5 dark:text-white">
									{data.title}
								</h2>
								<div className="my-5">
									{
                                        data.list.map((item, idx)=>{
                                            return(
                                                <div key={idx} className="flex items-center justify-left gap-3 mb-2">
                                                    <img src={checkMark} alt="checkmark" />
                                                    <p className="font-medium text-blueGrey dark:text-blue2">{item}</p>
											    </div>
                                            )
                                        })
											
                                    }
								</div>
								<NavLink
									className="font-medium flex items-center justify-center border-2 border-blue6 rounded-sm py-2.5 px-10 mt-2 mx-auto w-[80%] bg-blue6 text-white hover:text-white hover:border-black hover:bg-black ease-in-out duration-300 dark:bg-blue dark:border-blue dark:hover:bg-dark dark:hover:text-blue"
									to={data.link}
								>
									View Curriculum
								</NavLink>
							</div>
						);
					})}
				</div>
			</div>
			<JoinCard cardData={cardData}/>
		</>
	);
};

export default Courses;
