import React from 'react'
import AccordionSmall from '../UI/AccordionSmall'

const Services = () => {
    return (
        <section className=' pt-[60px] xl:pt-20 pb-11 px-6 md:px-16 lg:px-32 xl:px-40 flex flex-col justify-start md:flex md:flex-row'>

            {/* text  */}
            <div className='w-full mb-16 tracking-[-0.02em] text-[18px] md:pr-[10%] lg:text-xl xl:text-[28px] leading-7 lg:leading-10'>
                <p>We build transformative digital experiences for the world's leading brands by blending AI, design, and technology.</p>
            </div>

            {/* accordions */}
            <div className='w-full md:pl-20 lg:pl-40 xl:pl-50'>
                <AccordionSmall />
            </div>
        </section>
    )
}

export default Services
