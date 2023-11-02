import React from 'react'
import behance from "../images/behance.png"
import instagram from "../images/instagram.png"
import dribble from "../images/dribble.png"
import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"

const Footer = () => {
    return (
        <footer className='pt-[60px] pb-[38px] bg-[#17191f] text-white px-6 md:px-8 lg:px-10 xl:px-36 xl:pt-24'>

            <div className='md:flex md:justify-between md:gap-x-40 lg:gap-x-[300px] xl:gap-x-[600px] xl:mb-24'>

                <div>
                    <h2 className='text-[40px] md:text-[52px] lg:text-[74px] font-bold mb-2'>Let's Talk</h2>

                    <div className='mb-[53px]'>
                        <a className='text-[18px] md:text-xl xl:text-[28px] font-medium tracking-[-0.01em] pb-1 border-solid border-[#56616a] border-b-2 w-fit text-center'>hey@clay.global</a>
                    </div>
                </div>


                <nav className='text-base mb-[51px] md:mr-auto'>
                    <ul className='grid gap-y-3'>
                        <li className='pb-1 border-solid border-[#56616a] border-b-2 w-fit'>Work</li>
                        <li className='pb-1 border-solid border-[#56616a] border-b-2 w-fit'>Clients</li>
                        <li className='pb-1 border-solid border-[#56616a] border-b-2 w-fit'>Services</li>
                        <li className='pb-1 border-solid border-[#56616a] border-b-2 w-fit'>About</li>
                        <li className='pb-1 border-solid border-[#56616a] border-b-2 w-fit'>Contact</li>
                    </ul>
                </nav>
            </div>

            {/* footer social addresses  */}
            <div className='md:flex md:flex-row-reverse md:justify-between'>

                <div className='flex items-center justify-between gap-[5px] md:gap-8 mb-[60px] md:mb-1'>
                    <img src={dribble} alt="dribble" />
                    <img src={behance} alt="behance" />
                    <img src={instagram} alt="instagram" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                </div>

                <a className='pb-1 border-solid border-[#56616a] border-b-2 w-fit'>300 Broadway, San Francisco, CA 94133</a>
            </div>

            {/* footer last  */}
            <div className='mt-[30px] text-[#858e97] md:flex md:justify-between md:items-center md:mt-20'>
                <ul className='flex gap-8'>
                    <li className='pb-1 border-solid border-[#56616a] border-b-2 w-fit'>Privacy</li>
                    <li className='pb-1 border-solid border-[#56616a] border-b-2 w-fit'>Terms</li>
                    <li className='pb-1 border-solid border-[#56616a] border-b-2 w-fit'>Sitemap</li>
                </ul>

                <p className='mt-[37px] md:mt-0'>&#169; 2016 - 2023 Clay Global, LLC</p>
            </div>


        </footer>
    )
}

export default Footer
