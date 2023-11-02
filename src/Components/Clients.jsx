import React from 'react';
import client1 from "../images/client1.svg"
import client2 from "../images/client2.svg"
import client3 from "../images/client3.svg"
import client4 from "../images/client4.svg"
import client5 from "../images/client5.svg"
import client6 from "../images/client6.svg"
import client7 from "../images/client7.svg"
import client8 from "../images/client8.svg"
import client9 from "../images/client9.svg"
import client10 from "../images/client10.svg"

const Clients = () => {
  return (
    <section className='px-6 pb-20 pt-1 xl:pt-10 xl:pb-32 xl:px-32'>
        {/* clients logo */}
        <ul className='grid grid-cols-2 md:grid-cols-5 gap-x-[18px] gap-y-[14px] mb-10 xl:mb-16'>
            <li>
                <img src={client1} alt="" />   
                </li>
            <li>
                <img src={client2} alt="" />   
                </li>
            <li>
                <img src={client3} alt="" />   
                </li>
            <li>
                <img src={client4} alt="" />   
                </li>
            <li>
                <img src={client5} alt="" />   
                </li>
            <li>
                <img src={client6} alt="" />   
                </li>
            <li>
                <img src={client7} alt="" />   
                </li>
            <li>
                <img src={client8} alt="" />   
                </li>
            <li>
                <img src={client9} alt="" />   
                </li>
            <li>
                <img src={client10} alt="" />   
                </li>
        </ul>

        {/* text  */}
        <div className='text-center'>
            <a className='text-base font-medium tracking-[-0.01em] pb-2 border-solid border-[#bbc4d2] border-b-2 w-fit xl:text-[22px]'>View all clients </a>
            <span className='ml-1 text-gray-300 text-xl'>&rarr;</span>
        </div>
    </section>
  )
}

export default Clients
