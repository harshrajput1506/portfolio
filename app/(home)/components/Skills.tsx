"use client";

import React from 'react'
import Title from './Title'
import { SiAndroid, SiFlutter, SiJetpackcompose, SiKotlin, SiMysql, SiNodedotjs } from 'react-icons/si'
import { HoverEffect } from '@/components/ui/card-hover-effect'

export default function Skills() {
    const skills = [
        {
            title:"Android",
            icon: SiAndroid
        },
        {
            title:"Kotlin",
            icon: SiKotlin
        },
        {
            title:"Jetpack Compose",
            icon: SiJetpackcompose
        },
        {
            title:"Flutter",
            icon: SiFlutter
        },
       
        {
            title:"Node.Js",
            icon: SiNodedotjs
        },

        {
            title:"MySql",
            icon: SiMysql
        },

    
    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text='Skills 🔪' className='flex flex-col justify-center items-center -rotate-6' lineWidth='w-full'/>

        <HoverEffect items={skills}/>

    </div>
  )
}
