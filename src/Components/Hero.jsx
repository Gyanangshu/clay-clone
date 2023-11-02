import React, { useRef, useState } from 'react'
import videoPoster from "../images/videoposter.webp";
import { intro } from "../Constants"

const Hero = () => {

    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();


    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo);

        if (playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    }

    return (
        <section className='pt-20 md:px-6 lg:px-16 xl:px-32 xl:pt-40'>
            <div className='flex items-center justify-center flex-col md:justify-start md:items-start'>
                {/* heading  */}
                <div className='px-6 mt-16 md:px-1 xl:px-10'>
                    <p className='text-[40px] lg:w-3/4 xl:w-3/4 w-full xl:text-[70px] font-semibold tracking-[-0.03em]'>Clay is a global branding and UX design agency</p>
                </div>

                {/* video  */}
                <div className='mt-16 relative'>
                    <video src={intro} ref={vidRef} loop autoPlay onClick={handleVideo} className='cursor-pointer'>
                        <div className='absolute'>
                            {
                                playVideo ? "": ""
                            }
                        </div>

                    </video>
                </div>
            </div>
        </section>
    )
}

export default Hero
