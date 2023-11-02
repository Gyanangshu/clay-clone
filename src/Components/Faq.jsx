import React from 'react'
import Accordion from '../UI/Accordion'

const Faq = () => {
    return (
        <section className='bg-[#17191f] pt-10 pb-[18px] text-white px-6 md:px-8 lg:px-10 xl:px-36 xl:pt-20'>

            <div className=' '>
                <h2 className='text-3xl md:text-[40px] mb-[10px] font-bold'>FAQ</h2>
            </div>
            <div className=''>
                <Accordion />
            </div>
        </section>
    )
}

export default Faq
