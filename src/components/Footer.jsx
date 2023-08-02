import React from 'react'
import gmail from "../assets/socials icons/mail.webp";
import linkdin from "../assets/socials icons/linkedin.webp";
import discord from "../assets/socials icons/discord.webp";
import insta from "../assets/socials icons/insta.svg";
import youtube from "../assets/socials icons/youtube.webp";

const Footer = () => {
  return (
    <>
        <section className=' bg-dark3 px-[5%] dark:bg-dark3'>
            <div className='flex flex-col items-center justify-center pt-10 pb-5'>
                <h1 className='text-white bg-blue px-5 py-2 rounded-lg font-bold text-xl'>Senior</h1>
                <a className='text-white font-normal text-2xl pt-3 pb-7 hover:text-blue ease-in-out duration-300 hover:scale-105' href="https://www.asksenior.in/">asksenior.in</a>
                <div className='flex gap-5 pb-10'>
                    <a href="/">
                        <img className='h-10 hover:scale-110  ease-in-out duration-300 ' src={gmail} alt="gmail" />
                    </a>
                    <a href="/">
                        <img className='h-10 hover:scale-110  ease-in-out duration-300 ' src={linkdin} alt="linkdin" />
                    </a>
                    <a href="/">
                        <img className='h-10 hover:scale-110  ease-in-out duration-300 ' src={discord} alt="discord" />
                    </a>
                    <a href="/">
                        <img className='h-10 hover:scale-110  ease-in-out duration-300 ' src={insta} alt="insta" />
                    </a>
                    <a href="/">
                        <img className='h-10 hover:scale-110  ease-in-out duration-300 ' src={youtube} alt="youtube" />
                    </a>
                </div>
                <div className='md:flex gap-2 text-center'>
                    <p className='text-white'>© Senior {new Date().getFullYear()}. All rights reserved.</p>
                    <a className='text-white' href="/">Privacy Policy</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer