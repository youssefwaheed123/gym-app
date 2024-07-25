// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function SectionWrapper(props) {
    // eslint-disable-next-line react/prop-types
    const {children, header, title , id} = props
  return (
    <section id={id} className='min-h-screen flex flex-col gap-10'>
        <div className='flex flex-col justify-center gap-2 items-center bg-slate-950 py-10'>
            <p className='uppercase font-medium'>{header}</p>
            <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]} <span className='uppercase text-blue-400'>{title[1]}</span> {title[2]}</h2>
        </div>
        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10  p-4'>
            {children}
        </div>
    </section>
  )
}
