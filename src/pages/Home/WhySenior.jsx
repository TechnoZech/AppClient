import React from "react";
import whySenior from '../../assets/whySenior.svg';
const WhySenior = () => {
	return (
		<>
			<div className="px-[5%] bg-blue4 md:px-[10%] dark:bg-dark2 md:py-10">
				<h1 className=" text-center font-bold text-3xl text-black pt-20 pb-10  md:text-5xl md:pb-20 dark:text-white">WHY SENIOR?</h1>
				<div className="pb-20 grid grid-cols-1 lg:grid-cols-2">
					<div className="bg-blue2 rounded-t-[100px] p-6 mx-[7%] md:mx-0 md:my-[5%] md:rounded-tl-[200px] md:rounded-tr-none md:rounded-bl-3xl flex items-center justify-center dark:bg-dark3">
						<img src={whySenior} alt="why senior" />
					</div>
					<div className="bg-blue5 flex flex-col gap-5 px-5 py-10  rounded-lg items-center justify-center  dark:bg-dark">
						<h2 className="font-bold text-2xl md:text-3xl md:mb-5 dark:text-blue2">ICPC with Senior!</h2>
						<p className="text-blueGrey text-justify text-md font-medium md:mx-[7%] md:text-lg dark:text-white">
							Jaskaran Singh, our Co-Founder is <span className="font-bold"> AIR 1 </span> in ICPC Regionals, and an
							<span className="font-bold"> ICPC World Finalist</span> as well. <br /><br /> Make sure to join this bootcamp led
							by him to ace your ICPC 2023-24 preperation with the world
							finalist and other team of mentors as well.
						</p>
                        <a className="font-medium flex items-center justify-center border-2 border-black rounded-sm py-2.5 px-10 mt-2 mx-auto w-[250px] bg-black text-white hover:text-black hover:bg-blue5 ease-in-out duration-300 dark:bg-blue dark:border-blue dark:hover:bg-dark dark:hover:text-blue" href="/">
                            REGISTER NOW!
                        </a>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhySenior;
