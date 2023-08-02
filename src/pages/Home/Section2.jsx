import React from "react";
import doubt from '../../assets/cards img/doubt support.9271f8ad.svg';
import live from '../../assets/cards img/code class.bc0c0563.svg';
import mentor from '../../assets/cards img/mentorship sessions.0e3b1175.svg';
import practice from '../../assets/cards img/daily problems.fbc7c07c.svg';
import contest from '../../assets/cards img/post contest discussions.cb90296e.svg';
import contributor from '../../assets/cards img/contributor.649ad5ae.svg';

const Section2 = () => {
	return (
		<>
			<div className="bg-blue4 text-center px-[8%] py-20 md:px-[10%] dark:bg-dark2">
				<div className="flex flex-col items-center justify-center">
					<p className=" font-medium text-md text-black md:pt-10 dark:text-white">SENIOR IS THE</p>
					<h2 className=" font-bold text-3xl text-black pt-2 pb-3  md:text-5xl md:pb-10 dark:text-white"> Ultimate launchpad <br /> for your ICPC <br /> journey!</h2>
				</div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16">
                    <div className="py-10 bg-blue3 rounded-xl flex flex-col items-center justify-center gap-3 p-6 mt-10 dark:bg-dark">
                        <img className="h-[6rem]" src={doubt} alt="doubt" />
                        <h3 className="font-bold text-black text-lg dark:text-blue2">INSTANT DOUBT SUPPORT</h3>
                        <p className="text-blueGrey text-justify font-medium text-md dark:text-white md:text-lg">For instant doubt support, There is a dedicated forum channel. In addition, we have a dedicated channel for discussing problems.</p>
                    </div>

                    <div className="py-10 bg-blue3 rounded-xl flex flex-col items-center justify-center gap-3 p-6 mt-10 dark:bg-dark">
                        <img className="h-[6rem]" src={live} alt="doubt" />
                        <h3 className="font-bold text-black text-lg dark:text-blue2">LIVE CODECLASS</h3>
                        <p className="text-blueGrey text-justify font-medium text-md dark:text-white md:text-lg">We hold regular live codeclasses on a variety of topics. Voting for topics is done by the community members themselves.</p>
                    </div>

                    <div className="py-10 bg-blue3 rounded-xl flex flex-col items-center justify-center gap-3 p-6 mt-10 dark:bg-dark">
                        <img className="h-[6rem]" src={mentor} alt="doubt" />
                        <h3 className="font-bold text-black text-lg dark:text-blue2">MENTORSHIP SESSIONS</h3>
                        <p className="text-blueGrey text-justify font-medium text-md dark:text-white md:text-lg">On a regular basis, we have mentorship sessions on a variety of topics. CP, placements, internships, and many other topics have been discussed.</p>
                    </div>

                    <div className="py-10 bg-blue3 rounded-xl flex flex-col items-center justify-center gap-3 p-6 mt-10 dark:bg-dark">
                        <img className="h-[6rem]" src={practice} alt="doubt" />
                        <h3 className="font-bold text-black text-lg dark:text-blue2">DAILY PRACTICE PROBLEMS</h3>
                        <p className="text-blueGrey text-justify font-medium text-md dark:text-white md:text-lg">We have practice problems on every day that are not contest days. There are also sessions dedicated to explanations for them as well.</p>
                    </div>

                    <div className="py-10 bg-blue3 rounded-xl flex flex-col items-center justify-center gap-3 p-6 mt-10 dark:bg-dark">
                        <img className="h-[6rem]" src={contest} alt="doubt" />
                        <h3 className="font-bold text-black text-lg dark:text-blue2">POST CONTEST DISCUSSIONS</h3>
                        <p className="text-blueGrey text-justify font-medium text-md dark:text-white md:text-lg">We have post contest discussions for Codeforces, Codechef and sometimes Atcoder and Leetcode as well.</p>
                    </div>

                    <div className="py-10 bg-blue3 rounded-xl flex flex-col items-center justify-center gap-3 p-6 mt-10 dark:bg-dark">
                        <img className="h-[6rem]" src={contributor} alt="doubt" />
                        <h3 className="font-bold text-black text-lg dark:text-blue2">CONTRIBUTOR CLASSES</h3>
                        <p className="text-blueGrey text-justify font-medium text-md dark:text-white md:text-lg">There are regular contributor classes on a variety of topics. It is up to the community to decide what topics should be discussed.</p>
                    </div>
                </div>
			</div>
		</>
	);
};

export default Section2;
