import React from 'react'
import Title from './Title'
import { SiAmazonaws, SiAndroid, SiFirebase, SiJavascript, SiJetpackcompose, SiKotlin, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { FaJava } from 'react-icons/fa6'

export default function Projects() {
    const projects = [
        {
            title:"Quizo",
            tech:[
                SiAndroid, FaJava ,SiNodedotjs, SiFirebase, SiAmazonaws, SiMysql
            ],
            cover: "/quizo_cover.png",
            backgroud:"bg-indigo-500",
            link:"https://github.com/harshrajput1506/quizo"
        },

        {
            title:"CryptoWiki",
            tech:[
                SiAndroid, SiJetpackcompose, SiKotlin
            ],
            cover: "/cryptowiki_cover.png",
            backgroud:"bg-green-500",
            link:"https://github.com/harshrajput1506/CryptoWiki"
        },

        {
            title:"Mappy",
            tech:[
                SiAndroid, SiKotlin
            ],
            cover: "/mappy_cover.png",
            backgroud:"bg-sky-500",
            link:"https://github.com/harshrajput1506/Mappy"
        },

        {
            title:"Portfolio Website",
            tech:[
                SiTypescript, SiNextdotjs, SiTailwindcss, SiReact
            ],
            cover: "/portfolio_cover.png",
            backgroud:"bg-orange-500",
            link:"https://github.com/harshrajput1506/portfolio"
        },

        {
            title:"Political Party Landing Page",
            tech:[
                SiReact, SiTailwindcss, SiJavascript
            ],
            cover: "/pp_cover.png",
            backgroud:"bg-yellow-500",
            link:"https://blp-react.vercel.app"
        }
    ]
  return (
    <div className='py-10 p-5 sm:p-0 mx-auto mt-10'>
         <Title text='Projects 📱' className='flex flex-col justify-center items-center -rotate-6 group cursor-pointer' lineClass='w-32'/>

         <div className='grid grid-cola-1 sm:grid-cols-2 pt-20 gap-8'>
            {projects.map((project, index) => {
                return <Link href={project.link} key={index}>
                    <div className={cn("p-2 rounded-xl", project.backgroud)}>

                        <DirectionAwareHover imageUrl={project.cover} className=' w-full space-y-5 cursor-pointer'>
                            <div className='space-y-5'>
                            <h1 className=' text-2xl font-bold'>{project.title}</h1>
                            <div className='flex items-center gap-5'>
                                {project.tech.map((Icon, index) => {
                                    return <Icon key={index} className='w-8 h-8'></Icon>
                                })}
                            </div>
                            </div>
                        </DirectionAwareHover>
                    </div>

                </Link>
            })}
         </div>
    </div>
  )
}
