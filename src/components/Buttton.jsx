/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Buttton(props) {
    const {text,func} = props;
  return (
    <button onClick={func} className='px-8 py-4 mx-auto rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blue-shadow duration-200'>
        <p>{text}</p>
    </button>
  )
}
