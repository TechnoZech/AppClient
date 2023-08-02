// import React, { useEffect, useState } from 'react';
import './NavbarStyle.css';
import { NavLink } from "react-router-dom";
import axios from "axios";

const Navbar = (props) => {

    const openNav = () => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
        
    }

    // <----------------- Scroll to top for Brand icon -------------------->

    function scrollUp() {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    }
// <----------------- Logout -------------------->
    const multiple = () =>{
        openNav();
        logout(); //logoutfunction
    }

    const logout = () => {
        axios.get("http://localhost:8080/auth/logout", {
            withCredentials: true
        }).then((res) => {
            if (res.data === "done") {
                window.location.href = "/"
            }
        })
    }


    


  return (
    <>
        <nav className='bg-white text-black drop-shadow dark:bg-darkBlack dark:text-blue2'>
            <div className="logo text-2xl">
                <NavLink to="/" onClick={scrollUp} className='font-bold text-blue'>Senior</NavLink>
            </div>
            <div className="hamburger " onClick={openNav}>
                <div className="line1 bg-blue"></div>
                <div className="line2 bg-blue"></div>
                <div className="line3 bg-blue"></div>
            </div>
            <ul className="nav-links bg-white dark:bg-darkBlack">
                {
                    props.theme === 'dark' ?  <i className=" fa-regular fa-sun cursor-pointer hover:text-blue ease-in-out duration-300 text-lg " onClick={props.handleThemeSwitch}></i> : <i className="  fa-solid fa-moon cursor-pointer hover:text-blue ease-in-out duration-300 text-lg " onClick={props.handleThemeSwitch}></i>
                }
                <li onClick={openNav} className='font-medium text-lg  hover:text-blue cursor-pointer ease-in-out duration-300 '><a href="/#Courses">Courses</a></li>
                <li onClick={openNav} className='font-medium text-lg  hover:text-blue cursor-pointer ease-in-out duration-300 '><a href="/#ourTeam">OurTeam</a></li>
                <li onClick={openNav} className='font-medium text-lg  hover:text-blue cursor-pointer ease-in-out duration-300 '><NavLink to="/learn">Learn</NavLink></li>
                
                {props.userObject ? <button onClick={multiple } className=" py-1.5 px-7 login-button text-white bg-blue hover:scale-105 ease-in-out duration-300 font-medium rounded" 
                >Logout</button> : <a onClick={openNav} className=" py-1.5 px-7 login-button text-white bg-blue hover:scale-105 ease-in-out duration-300 font-medium rounded" 
                href='http://localhost:8080/auth/google'>Login</a>}
            </ul>
        </nav>
    </>
  )
}

export default Navbar