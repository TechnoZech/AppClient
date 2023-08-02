import React from 'react'
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";

const Hero = (props) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-blue2 px-[10%] md:flex-row-reverse md:justify-between dark:bg-dark md:pt-[60px]'>

      <img src={props.theme === 'dark' ? hero2 : hero1} alt="heroimg" className=' w-screen h-1/2 object-contain -mt-7 md:h-screen md:w-2/5'/>
      <div className='text-center md:text-left dark:text-white'>
        <h1 className=' text-black text-7xl font-extrabold md:text-9xl dark:text-white'>Air-1</h1>
        <h2 className=' text-black text-4xl font-bold md:text-6xl dark:text-white'>ICPC regional</h2>
        <p className=' text-black text-xl font-medium mt-3 dark:text-white'>Jaskaran Singh</p>
        <a href='/' className='flex items-center justify-center border border-black rounded-full py-2.5 px-10 mt-7 w-[350px] hover:text-white hover:bg-black ease-in-out duration-300 dark:border-white dark:hover:bg-white dark:hover:text-black'>
          <p className='font-medium'>Register for the BootCamp</p>
          <i className="fa-solid fa-chevron-right ml-3"></i>
        </a>
        <p className='mt-2 text-center md:mr-[90px]'>New batch starting in <br /> <span className='font-semibold'> January</span></p>
      </div>
    </div>
  )
}

export default Hero