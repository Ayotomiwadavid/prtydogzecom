import React from 'react'
import logo from "../images/Prtydozlogo.png"
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar'

const Appbar = () => {
  return (
    <header className='flex w-full relative items-center justify-between md:px-5 py-2 top-0 right-0 left-0'>
    <div className='w-[50%] md:w-[20%] h-[50px] p-2 md:p-4'>
      <img src={logo} alt='logo' className='h-[4/5] w-[80%] md:w-[70%]'/>
    </div>
    <div className='flex items-center justify-center px-5'>
    <div className='md:hidden'>
    <MenuIcon 
        style={{
          fontSize: '45px',
          color: '#ab7a5f',
          fontWeight: "bolder"
        }}
      />
    </div>
    </div>
    <Navbar />
    </header>
  )
}

export default Appbar
