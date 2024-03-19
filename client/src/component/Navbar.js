import React from 'react'
import '../index.css'
import { CardTravel, PersonAddAlt } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-[80%] hidden md:flex items-center justify-between'>
      <ul className='w-1/2 h-full list-none flex items-center justify-center px-2 gap-5'>
        <li className='capitalize text-clr-grey-3 px-2 p-1 transition-all duration-300 text-base navitems hover:border-b-2 border-clr-primary-1  text-center'>home</li>
        <li className='capitalize text-clr-grey-3 px-2 p-1 transition-all duration-300 text-base navitems hover:border-b-2 border-clr-primary-1  text-center'>about</li>
        <li className='capitalize text-clr-grey-3 px-2 p-1 transition-all duration-300 text-base navitems hover:border-b-2 border-clr-primary-1  text-center'>products</li>
      </ul>
      <div className='w-1/2 h-full flex items-center justify-center gap-5'>
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
