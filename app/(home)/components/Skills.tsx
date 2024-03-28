"use client";

import React from 'react'
import Title from './Title'
import { SiAndroid, SiFigma, SiFlutter, SiJavascript, SiJetpackcompose, SiKotlin, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { FaJava } from 'react-icons/fa6';

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
            title:"Java",
            icon: FaJava
        },
        {
            title:"Flutter",
            icon: SiFlutter
        },

        {
            title:"JavaScript",
            icon: SiJavascript
        },
       
        {
            title:"Node.Js",
            icon: SiNodedotjs
        },

        {
            title:"MySql",
            icon: SiMysql
        },
        {
            title:"Figma",
            icon: SiFigma
        },

        {
            title:"React",
            icon: SiReact
        },

        {
            title:"Tailwind CSS",
            icon: SiTailwindcss
        },

        {
            title:"Next.Js",
            icon: SiNextdotjs
        },

    
    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text='Skills 🔪' className='flex flex-col justify-center items-center -rotate-6 group cursor-pointer' lineClass='w-24'/>

        <HoverEffect items={skills}/>

    </div>
  )
}
