import React from 'react';
import { workCards } from "../Constants/data"

const Works = () => {
    return (
        <section className='pb-16'>
            <div className='md:grid md:grid-cols-2 md:px-16 md:gap-4 md:items-start'>
                {
                    workCards.map((item) => {
                        return (
                            <div className='pb-10'>

                                <div className='mt-3'>
                                    <img className='w-full' src={item.img} alt="work sample picture" />

                                </div>


                                <div className='px-6 pt-6 pb-10'>
                                    <div className='mb-2 leading-normal'>
                                        <p className='text-[20px] xl:text-3xl font-bold mb-1'>{item.heading}</p>
                                        <p className='xl:text-base'>{item.Sub}</p>
                                    </div>


                                    <ul className='flex gap-4 text-sm text-[#637695] mt-2'>
                                        <li>{item.point1}</li>
                                        <li>{item.point2}</li>
                                        <li>{item.point3}</li>
                                    </ul>


                                    <div className='mt-[10px]'>
                                        <a className='text-[14px] font-medium tracking-[-0.01em] pb-1 border-solid border-[#bbc4d2] border-b-2 w-fit'>View case study </a>
                                        <span className='ml-1 text-black text-xl'>&rarr;</span>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>

            {/* text  */}
            <div className='text-center'>
                <a className='text-base font-medium tracking-[-0.01em] pb-1 border-solid border-[#bbc4d2] border-b-2 w-fit text-center'>View all clients </a>
                <span className='ml-1 text-gray-300 text-xl'>&rarr;</span>
            </div>


        </section>
    )
}

export default Works
