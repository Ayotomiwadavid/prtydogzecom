import React from 'react'
import logo from "../images/Prtydozlogo.png"
import Navbar from './Navbar'

const Appbar = () => {
  return (
    <header className='flex w-full absolute items-center justify-between px-5 py-2 top-0 right-0 left-0'>
    <div className='w-[50%] md:w-[20%] h-[50px] p-2 md:p-4'>
      <img src={logo} alt='logo' className='h-[4/5] w-[80%] md:w-[70%]'/>
    </div>
    <Navbar />
    </header>
  )
}

export default Appbar
