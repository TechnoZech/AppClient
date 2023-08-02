import React from "react";
import TeamProfileData from "../../data/TeamProfileData";

const OurStory = () => {
	window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
	return (
		<>
			<div id="ourTeam" className=" bg-blue2 px-[5%] py-20 md:px-[10%] dark:bg-dark">
				<div className="bg-blue3 py-10 px-5 text-center rounded-tl-[3rem] rounded-br-[3rem] md:px-28 md:py-22 md:rounded-tl-[5rem] md:rounded-br-[5rem] md:py-16 dark:bg-dark2">
					<h1 className=" text-3xl font-bold mb-8 md:text-4xl md:mb-10 dark:text-blue2">
						Our Story
					</h1>
					<p className="font-normal text-justify text-blueGrey md:text-xl dark:text-white">
						Founded in <span className=" dark:text-blue2 font-bold">January 2023</span>, the
						Senior - DCD Discord Server offers Daily Contest Discussions (DCDs)
						to anyone who wants them. We are now a successful community of
						contributors with a lot going on. <br /> <br /> The
						<span className=" dark:text-blue2 font-bold"> DCDs</span> for{" "}
						<span className=" dark:text-blue2 font-bold">
							Codeforces, Codechef, and at times
						</span>{" "}
						<span className=" dark:text-blue2 font-bold">Atcoder</span> and{" "}
						<span className=" dark:text-blue2 font-bold">Leetcode</span> are also available. As
						part of our mentoring program, we organize regular sessions. <br />{" "}
						<br /> So far, we have conducted 3 webinars in different colleges,
						and invited people to speak to our audience as well. Each of the
						sessions is on our{" "}
						<a href="/" className=" dark:text-blue2 font-bold underline">
							YouTube channel.
						</a>
					</p>
				</div>

				<div className=" flex flex-col items-center justify-center py-20 text-center px-[10%] md:px-0">
					<h1 className="text-2xl font-bold mb-8 bg-blue3 px-5 py-5 rounded-md md:text-4xl md:mb-10 dark:bg-dark2 dark:text-white">
						Our Team
					</h1>
					<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-full ">
						{TeamProfileData.map((data, idx) => {
							return (
								<div key={idx} className="bg-blue3 py-10 rounded-lg w-[100%] dark:bg-dark2">
									<a
										target="_blank"
										rel="noopener noreferrer"
										className="flex flex-col items-center justify-center dark:text-white"
										href={data.linkdin}
									>
										<img
											className="rounded-full h-[7rem] w-[7rem] mb-5"
											src={data.img}
											alt="profile"
										/>
										<p className="font-bold text-lg dark:text-blue">Abhishek Srivastava</p>
										<p className="font-semibold text-lg text-blueGrey mb-5 dark:text-blue2">
											{data.role}
										</p>
										<p className="text-blueGrey font-medium dark:text-white">
											Codeforces: <span className="font-semibold ">{data.codeforces}</span>
										</p>
										<p className="text-blueGrey font-medium dark:text-white">
											LeetCode: <span className="font-semibold ">{data.leetcode}</span>
										</p>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default OurStory;
