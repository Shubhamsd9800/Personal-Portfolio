import React, { useState } from 'react'
import Logo from '../assets/p3.png'
import { RiMenuSearchFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitterX } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {

    const[nav,setNav]=useState(false);
    const handleClick=()=>setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
       <div>
            <img src={Logo} alt="Logo" className='w-[75px]' />
       </div>


        {/* menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
       


        {/* Hamburger */}
       <div onClick={handleClick} className='md:hidden z-10 '>
            {
                !nav ? <RiMenuSearchFill className='* text-[30px]' /> : <RxCross2 className='* text-[30px]'/>
            }
           
       </div>

       {/* Mobile Menu */}
       <div className={ !nav ? 'hidden' : 'absolute top-0 right-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
       <ul>
            <li className='py-5 text-3xl '>Home</li>
            <li className='py-5 text-3xl '>About</li>
            <li className='py-5 text-3xl '>Skills</li>
            <li className='py-5 text-3xl '>Work</li>
            <li className='py-5 text-3xl '>Contact</li>
        </ul>

       </div>
        

        {/* Social icons */}
        <div className='hidden md:flex fixed flex-col top-[30%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex 0px 5px 15px; rounded-md justify-between items-center ml-[-100px] hover:bg-blue-600 hover:ml-[-10px] duration-300 bg-blue-500 hover:shadow-custom-hover'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="/">
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex 0px 5px 15px; rounded-md justify-between items-center ml-[-100px] hover:bg-[#2c2929] hover:ml-[-10px] duration-300 bg-[#2d2c2c] hover:shadow-custom-hover'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="/">
                GitHub <FaGithub size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex 0px 5px 15px; rounded-md justify-between items-center ml-[-100px] hover:bg-[#2a9387] hover:ml-[-10px] duration-300 bg-[#3da095] hover:shadow-custom-hover'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="/">
               Email<HiOutlineMail size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex 0px 5px 15px; rounded-md justify-between items-center ml-[-100px] hover:bg-[#040D12] hover:ml-[-10px] duration-300 bg-[#040D12] hover:shadow-custom-hover'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="/">
               Twitter<BsTwitterX size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex 0px 5px 15px; rounded-md justify-between items-center ml-[-100px] hover:bg-[#30394b] hover:ml-[-10px] duration-300 bg-[#445069] hover:shadow-custom-hover'>
            <a className='flex justify-between items-center w-full text-gray-300'
             href="/">
                Resume<BsFillPersonLinesFill size={30}/>
            </a>
        </li>
        </ul>
        </div>
            


    </div>
  )
}

export default Navbar