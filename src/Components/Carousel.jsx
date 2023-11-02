import React from 'react';
import carousel1 from "../images/carousel1.webp";
import carousel2 from "../images/carousel2.webp";
import carousel3 from "../images/carousel3.webp";
import carousel4 from "../images/carousel4.webp";

const Carousel = () => {
    return (
        <section className='pt-[85px] bg-gray-100 pb-[99px]'>
            {/* image carousel  */}
            <div className='flex items-center justify-around overflow-x-hidden gap-8'>
                <img className='h-1/3 w-1/3' src={carousel1} alt="" />
                <img className='h-1/3 w-1/3' src={carousel2} alt="" />
                <img className='h-1/3 w-1/3' src={carousel3} alt="" />
                <img className='h-1/3 w-1/3' src={carousel4} alt="" />
            </div>

            {/* text  */}
            <div className='px-6 md:px-10 lg:px-36 pt-[74px]'>
                <p className='mb-14 tracking-[-0.02em] text-lg md:w-3/4 md:text-xl lg:leading-[2.5rem] xl:text-[28px]'>
                Our cross-disciplinary team combines strategy, branding, UX design, and technology for swift, impactful results. With cofounder leadership, we integrate human creativity with AI-driven efficiency to consistently exceed expectations.
                </p>

                <div>
                    <a className='text-base font-medium tracking-[-0.01em] pb-1 border-solid border-[#bbc4d2] border-b-2 w-fit text-center'>Get to know us</a>
                    <span className='ml-1 text-gray-300 text-xl'>&rarr;</span>
                </div>
            </div>


        </section>
    )
}

export default Carousel
