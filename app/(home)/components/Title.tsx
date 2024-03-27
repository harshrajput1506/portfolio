import { cn } from '@/lib/utils'
import React from 'react'

export default function Title(
    {text, className, lineClass}: {text:string, className?:string, lineClass:string}
    ) {
  return (
    <div className={className}>
        <h1 className=' font-bold text-2xl group-hover:text-green-500 transition-all'>{text}</h1>
        <div className={cn('h-2 bg-green-500 rounded-full', lineClass)}></div>
        <div className={cn('h-2 bg-indigo-500 rounded-full translate-x-2', lineClass)}></div>
    </div>
  )
}
