import React from 'react'

export default function Title(
    {text, className, lineWidth}: {text:string, className?:string, lineWidth?:string}
    ) {
  return (
    <div className={className}>
        <h1 className=' font-bold text-2xl group-hover:text-green-500 transition-all'>{text}</h1>
        <div className=' w-36 h-2 bg-green-500 rounded-full'></div>
        <div className='w-36 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
    </div>
  )
}
