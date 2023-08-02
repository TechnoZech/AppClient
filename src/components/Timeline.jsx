import React from 'react'
import { ReactComponent as TargetIcon } from "../assets/target.svg";

const Timeline = (props) => {
    const {timelineElements} = props;
  return (
    <>
        <section className="bg-blue3 dark:bg-dark2 pb-[150px] md:px-[5%] lg:px-[10%] ">
				<h1 className="text-decoration-line: underline pt-[70px] md:pt-[150px] text-3xl text-center font-bold text-blue md:text-4xl">Course Outline</h1>
                    <div className="wrapper bg-blue2 dark:bg-dark md:rounded-3xl mt-20 top-[50px]">
                        <div className="center-line bg-blue"></div>

                        {timelineElements.map((ele) => {
                            return (
                                <div className={`row ${ele.class}`}>
                                    <section className="bg-blue5 before:bg-blue5 ">
                                        <TargetIcon className="icon" />
                                        <div className="details">
                                            <span className="bg-blue text-white font-bold text-lg py-4 px-8 rounded-md w-full">
                                                {ele.title}
                                            </span>
                                        </div>
                                        <div className="py-5 px-8">
                                            {ele.data.map((ele) => {
                                                return (
                                                    <p className="py-1 text-md text-blueGrey font-medium">
                                                        {ele}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </section>
                                </div>
                            );
                        })}
                    </div>
                
			</section>
    </>
  )
}

export default Timeline