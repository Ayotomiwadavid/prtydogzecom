import React from 'react'
import '../index.css'
import {CardTravel, PersonAddAlt } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import logo from "../images/Prtydozlogo.png"

const Navbar = () => {
  return (
    <nav className='md:w-[80%] hidden w-full absolute md:static sm:z-30 sm:bg-red-700 bg-red-700 md:flex md:flex-row flex-col sm:h-[100vh] md:h-0 top-[0] items-start md:items-center px-3 md:px-0 justify-start md:justify-between'>
      <div className='w-full md:hidden h-[50px] py-5 px2 flex items-center justify-between mt-8'>
        <img src={logo} alt='logo' className='h-[4/5] w-[50%] md:w-[70%]' />
        <CloseIcon 
          style={{
            color: '#e66b6b',
            fontSize: '45px',
            fontWeight: 'bolder'
          }}
        />
      </div>
      <ul className='md:w-1/2 md:h-full list-none flex w-full md:flex-row flex-col items-start md:items-center justify-center pt-7 md:py-0 px-2 gap-5'>
        <li className='capitalize text-clr-grey-3 px-2 p-1 transition-all duration-300 text-base navitems md:hover:border-b-2 md:border-clr-primary-1  text-center cursor-pointer'>home</li>
        <li className='capitalize text-clr-grey-3 px-2 p-1 transition-all duration-300 text-base navitems md:hover:border-b-2 md:border-clr-primary-1  text-center cursor-pointer'>about</li>
        <li className='capitalize text-clr-grey-3 px-2 p-1 transition-all duration-300 text-base navitems md:hover:border-b-2 md:border-clr-primary-1 text-center cursor-pointer'>products</li>
      </ul>
      <div className='md:w-1/2 md:h-full flex w-full py-5 md:py-0 items-center justify-center gap-5'>
        <Link to='/cart'>
          <li className='relative cartNav capitalize text-clr-grey-3 px-2 p-1 text-2xl navitems list-none  font-bold'>carts  <CardTravel
            style={{
              "fontWeight": "bold",
              "fontSize": "30px",
              "color": "#102a42",
            }}
          />
            <p className='absolute right-0 top-0 w-[25px] h-[25px] text-clr-white rounded-full bg-clr-primary-5 flex items-center justify-center text-xs'>0</p>
          </li>
        </Link>
        <Link to='/user/login'>
          <li className='capitalize text-clr-grey-3 px-2 p-1  text-2xl navitems list-none font-bold'>login  <PersonAddAlt
            style={{
              "fontWeight": "bold",
              "fontSize": "30px",
              "color": "#102a42",
            }}
          /></li>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
