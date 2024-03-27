import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si"

export default function Navbar({className}:{className?:string}) {

    const socials = [
        {
            name:"Linkedin",
            link: "https://www.linkedin.com/in/whyitzharsh",
            icon:SiLinkedin
        },
        {
            name:"Github",
            link: "https://github.com/harshrajput1506",
            icon:SiGithub
        },
        {
            name:"X (Twitter)",
            link: "https://twitter.com/whyitzharsh",
            icon:SiX
        }
    ]



  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Harsh Rajput 👨🏻‍💻</h1>
        <div className='flex items-center gap-5'>
            {
                socials.map((social, index) => {
                    const Icon = social.icon
                    return <Link href={social.link} key={index} aria-label={social.name}>
                        <Icon className='h-5 w-5 hover:scale-125 transition-all'/>
                    </Link>
                })
            }
        </div>
    </nav>
  )
}
