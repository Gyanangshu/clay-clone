import React from 'react'

const AccordionSmallItem = ({ service, onToggle, active }) => {
  const { brandName, desc, img } = service
  return (
    <li className={` ${active ? "active" : ""}`}>
      <div>
        <button className=' text-lg flex justify-start items-center gap-2 text-left pb-4 xl:pb-6 transition-all ease-in-out duration-300' onClick={onToggle}>
          <div className='text-xl font-bold xl:text-3xl'>
            {brandName}
          </div>
          {/* arrows  */}
          <span className='delay-300'>{active ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rotate-180 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#a4b0c2]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          }
          </span>
        </button>

        <div className={`h-0 overflow-hidden transition-all ease-in-out duration-300 text-[#858e97] ${active ? "open h-auto pb-4" : ""}`}>
          <div>{desc}</div>
          <div>
            <img className='h-1/2 w-1/2 pt-2' src={img} alt="brand-img" />
          </div>
        </div>
      </div>

    </li>
  )
}

export default AccordionSmallItem
