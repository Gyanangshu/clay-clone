import React from 'react'

const ServiceInfo = () => {
    return (
        <section className='pt-[83px] pb-[5px] flex items-center justify-center md:justify-start px-6 bg-gray-100'>
            <div className='md:w-3/4 lg:w-3/4 lg:px-32 md:px-6'>
                <p className='text-3xl md:text-[44px] xl:text-[52px] lg:leading-[3.5rem] md:leading-10 font-bold mb-4 lg:mb-8'>We Transform companies through design innovation</p>
                <p className='text-lg lg:text-[28px] lg:leading-[2.5rem]'>A full-service creative agency designing and building inventive digital experiences across all platforms and brand touchpoints.
                </p>

                <div className='mt-8'>
                    <a className='text-base font-medium tracking-[-0.01em] pb-1 border-solid border-[#bbc4d2] border-b-2 w-fit'>View our services </a>
                    <span className='ml-1 text-black text-xl'>&rarr;</span>
                </div>
            </div>
        </section>
    )
}

export default ServiceInfo
