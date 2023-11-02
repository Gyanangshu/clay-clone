import React, { useState } from 'react'
import xicon from "../images/xicon.png"
import hamburger from "../images/hamburger.svg"
import behance from "../images/behance.png"
import instagram from "../images/instagram.png"
import dribble from "../images/dribble.png"
import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"

const Navbar = () => {

    let Links = [
        { name: 'Work' },
        { name: 'Clients' },
        { name: 'Services' },
        { name: 'About' },
        { name: 'Contact' },
    ]

    const [open, setOpen] = useState(false);

    return (
        <div className='fixed w-full top-0 left-0 '>
            <div className={open ? 'bg-black md:flex items-center justify-between py-6 md:px-10 px-6' : 'md:flex items-center justify-between bg-white py-4 md:py-10 md:px-4 px-4 xl:px-32'}>

                {/* nav logo  */}
                <div className='w-full md:flex md:justify-between'>
                    {open ?
                        <div className='font-bold text-2xl cursor-pointer flex items-center'>
                            <span className='absolute top-2/4 h-5 w-10 rounded-t-full bg-white -translate-x-1/4 -translate-y-2/4  pt-2 -rotate-90 '>
                            </span>
                        </div>
                        :
                        <div className='font-bold text-2xl cursor-pointer flex items-center'>
                            <span className='absolute top-2/4 h-5 w-10 rounded-t-full bg-black -translate-x-1/4 -translate-y-2/4 xl:h-7 xl:w-14 pt-2 -rotate-90'>
                            </span>
                            <span className='ml-8 xl:ml-12 md:text-3xl xl:text-5xl'>
                                clay
                            </span>
                        </div>
                    }

                    <div className='hidden md:block'>
                        {
                            !open && (
                                <nav className='w-full'>
                                    <ul className='flex gap-12 text-lg tracking-[-0.001em] cursor-pointer '>
                                        <li className='hover:pb-1 hover:border-b-2 hover:border-[#bbc4d2] hover:w-fit hover:transition-all hover:ease-in-out hover:duration-100'>Work</li>
                                        <li className='hover:pb-1 hover:border-b-2 hover:border-[#bbc4d2] hover:w-fit hover:transition-all hover:ease-in-out hover:duration-100'>Clients</li>
                                        <li className='hover:pb-1 hover:border-b-2 hover:border-[#bbc4d2] hover:w-fit hover:transition-all hover:ease-in-out hover:duration-100'>Services</li>
                                        <li className='hover:pb-1 hover:border-b-2 hover:border-[#bbc4d2] hover:w-fit hover:transition-all hover:ease-in-out hover:duration-100'>About</li>
                                        <li className='hover:pb-1 hover:border-b-2 hover:border-[#bbc4d2] hover:w-fit hover:transition-all hover:ease-in-out hover:duration-100'>Contact</li>
                                    </ul>
                                </nav>
                            )
                        }
                    </div>
                </div>


                {/* nav hamburger icon  */}
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
                    {open ? <img className='mt-1 mr-1 h-6 w-6' src={xicon} alt="close" /> : <img className='h-9 w-9' src={hamburger} alt="open" />}
                </div>

                {/* after opening  */}

                {/* nav body  */}
                <ul className={`md:items-center md:pb-0 pb-24 pt-12 sm:pt-0 absolute md:static z-[-1] left-0 w-full h-screen sm:h-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in overflow-y-scroll md:hidden ${open ? 'top-10 bg-black' : 'top-[-530px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.link} className=' my-2 tracking-[-0.03em]'>
                                <a className={open ? 'text-white duration-500 text-3xl font-bold' : ''}>{link.name}</a>
                            </li>
                        ))
                    };

                    <div className='text-white mt-20 mb-16'>
                        <p className='text-[#858e97] mb-[5px] '>Get in touch</p>
                        <p className='text-2xl pb-1 border-solid border-[#56616a] border-b-2 w-fit'>hey@clay.global</p>
                    </div>

                    <div>
                        <div className='flex items-center justify-start flex-wrap gap-[5px] mb-[60px]'>
                            <img className='pt-4 pb-4 pr-4' src={dribble} alt="dribble" />
                            <img className='p-4' src={behance} alt="behance" />
                            <img className='p-4' src={instagram} alt="instagram" />
                            <img className='p-4' src={linkedin} alt="linkedin" />
                            <img className='p-4' src={twitter} alt="twitter" />
                            <img className='p-4' src={facebook} alt="facebook" />
                        </div>

                        <a className='pb-1 border-solid border-[#56616a] border-b-2 w-fit text-white text-sm'>300 Broadway, San Francisco, CA 94133</a>
                    </div>

                </ul>
            </div>


        </div>
    )
}

export default Navbar
