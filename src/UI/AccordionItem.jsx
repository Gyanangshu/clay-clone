import React from 'react'

const AccordionItem = ({ faq, onToggle, active }) => {
    const { question, answer } = faq
    return (
        <li className={`xl:pt-10 pt-[22px] ${active ? "active" : ""}`}>
            <div className='border-b-[1px] border-b-[#2a2d38] '>
                <button className='w-full text-lg md:text-xl xl:text-[28px] flex justify-between text-left pb-6  transition-all ease-in duration-100' onClick={onToggle}>
                    {question}
                    <span className='delay-300'>{active ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rotate-180 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    }
                    </span>
                </button>

                <div className={`h-0 overflow-hidden transition-all ease-in duration-300 text-[#858e97] ${active ? "open h-auto pb-4" : ""}`}>
                    <div>{answer}</div>
                </div>
            </div>

        </li>
    )
}

export default AccordionItem
