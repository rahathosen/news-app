'use client'

import { ArrowLongUpIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const BackToTopButton = () => {
    const [btnVisiblity, setBtnVisiblity] = useState(false)
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        const toggleVisiblity = () => {
            window.pageYOffset > 250 ? setBtnVisiblity(true) : setBtnVisiblity(false);
        }
        window.addEventListener('scroll', toggleVisiblity);
        return () => {
            window.removeEventListener('scroll', toggleVisiblity);
        }
    }, [])


    return (
        <button onClick={handleScroll}>
            <div className={` ${!btnVisiblity ? "-translate-y-[200vh]" : "translate-y-0"} fixed z-30 bottom-2 md:right-2 right-3 
             w-7 h-7 rounded-full cursor-pointer flex justify-center items-center 
              text-2xl group bg-stone-200 dark:bg-[#040D12] border border-stone-400 dark:border-[#0c2525f8] text-zinc-400`}>
                <ArrowLongUpIcon className='group-hover:scale-125 duration-500 transition-all h-5 w-5' />
            </div>
        </button>
    )
}

export default BackToTopButton;
