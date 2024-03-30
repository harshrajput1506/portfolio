import { MovingBorderButton } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    
    return (
        <div className='min-h-[60vh] flex flex-col-reverse lg:flex-row gap-20 lg:gap-0 items-center justify-between mt-32 lg:mt-0 animate-move-up'>
            <div className=' space-y-10 text-center lg:text-left gap-y-10'>
                <h1 className='text-4xl lg:text-7xl font-bold'>
                   {" Nice to meet you! 👋"} <br /> <span className='underline underline-offset-8 decoration-green-500'>{"I'm Harsh."}</span>
                </h1>

                <p className=' md:w-96 text-lg text-gray-300'>
                    {"I'm a Fullstack app developer, fueling my passion for innovation through creative app development."}
                </p>

        <Link href={'mailto:harshrajput2906@gmail.com'} className=' inline-block'>
          <div className='group'>
          <h1 className='font-bold text-2xl transition-all group-hover:text-green-500'>Contact Me 📭</h1>
          <div className='w-36 h-2 bg-green-500 rounded-full'></div>
          <div className='w-36 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
      </div>
    </Link>   

            </div>

            <div className=' relative'>
                <div className='w-64 h-64 space-y-3 -rotate-[30deg]'>
                    <div className='flex gap-3 translate-x-8'>
                        <div className='w-28 h-28 bg-green-500 rounded-2xl'></div>
                        <div className='w-28 h-28 rounded-full bg-indigo-500'></div>
                    </div>

                    <div className='flex gap-3 -translate-x-8'>
                        <div className='w-28 h-28 bg-indigo-500 rounded-2xl'></div>
                        <div className='w-28 h-28 rounded-full bg-green-500'></div>
                    </div>
                    <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
                </div>
                <Link href={"https://drive.google.com/file/d/1a1lYTMLfc0S9f9HkOH-6w6G143za2dae/view?usp=sharing"}>
                    <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
                        <MovingBorderButton borderRadius='0.5rem' className='p-3 font-semibold'>
                            <p>📢 Available for Work</p>
                        </MovingBorderButton>
                    </div>
                </Link>

            </div>
        </div>

    )
}
