import React, {useState} from 'react'
import { Link} from 'react-scroll'
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='w-full h-[90px] bg-black text-white sticky top-0 z-10 shadow-xl shadow-black'>
        <div className=' mx-auto px-4 flex flex-row  h-full'> 
                <div className='flex mx-auto items-center justify-center transform'>
                <ul className='sm:hidden flex flex-row font-bold'>
                <li className=' hover:cursor-default p-2 hover:border-fuchsia-700 hover:border hover:bg-fuchsia-700 rounded-md hover:scale-110 duration-100 ease-in-out'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className=' hover:cursor-default p-2 hover:border-fuchsia-700 hover:border hover:bg-fuchsia-700 rounded-md hover:scale-110 duration-100 ease-in-out'><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li className=' hover:cursor-default p-2 hover:border-fuchsia-700 hover:border hover:bg-fuchsia-700 rounded-md hover:scale-110 duration-100 ease-in-out'><Link to="events" smooth={true} duration={500}>Events</Link></li>
                <li className=' hover:cursor-default p-2 hover:border-fuchsia-700 hover:border hover:bg-fuchsia-700 rounded-md hover:scale-110 duration-100 ease-in-out'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
            <div className='lg:hidden xl:hidden flex mx-auto sm:-mr-[15px] items-center justify-center '>
                <ul className='flex p-2 sm:left-1 sm:absolute'>
                    <li className='sm:p-5 sm:py-5 p-1'><a href="" className=" hover:text-gray-400"><FaInstagram size={22} width={10}/></a></li>
                    <li className='sm:p-5 sm:py-5 p-1'><a href="" className=" hover:text-gray-400"><FaTwitter size={22}/></a></li>
                    <li className='sm:p-5 sm:py-5 p-1'><a href="" className=" hover:text-gray-400"><FaLinkedin size={22}/></a></li>
                </ul>
            <div className='md:hidden lg:hidden xxl:hidden xl:hidden mr-4 cursor-pointer' onClick={handleClick}>
                {!nav ? <AiOutlineMenu size={20} className='w-5 fill-white xl:hidden'/> : <AiOutlineClose className='w-5 xl:hidden'/>}
            </div>
            </div>
        </div>
        <div className=''>
        <ul className={!nav ? 'hidden' : 'absolute bg-tranparent w-full px-8  flex flex-col items-center justify-between text-white cursor-pointer'}>
            <li className='p-2'><Link to="home"smooth={true} duration={500}>Home</Link></li>
            <li className='p-2 '><Link to="about"smooth={true} duration={500}>About</Link></li>
            <li className='p-2 '><Link to="events"smooth={true} duration={500}>Events</Link></li>
            <li className='p-2 '><Link to="contact"smooth={true} duration={500}>Contact</Link></li>
            {/* <button className='border-b-2 bg-purple-600 hover:bg-purple-400 p-2 rounded-full px-3 text-gray-50'><AiOutlineShoppingCart className='w-5 inline-block'/>Cart (0)</button> */}
        </ul>
        </div>
    </div>
  )
}

export default Navbar