import React from 'react'
import Appbar from './Appbar'
import { Link } from 'react-router-dom'
import Button from './Button'
import apparel from '../images/dogapparel.jpg'
import poppies from '../images/herodog.jpg'

const Herosection = () => {
  return (
    <main className='relative w-full flex flex-col items-center justify-center'>
      <Appbar />
      <section className='w-full items-center justify-center md:pl-[5vw] md:pr-[10vw] flex h-[60vh] md:h-lvh md:mt-05 mt-0'>
        <main className='p-3 md:p-0 h-full w-full md:w-1/2 items-start justify-center md:justify-center flex flex-col top-0'>
          <h1 className='md:text-4xl text-3xl capitalize w-full md:w-[70%] text-left text-clr-grey-1 font-extrabold tracking-widest'>Tailored Comfort for Every Paw</h1>
          <p className=' leading-[30px] sm:mb-5 md:leading-10 max-w-2xl py-4 text-clr-grey-6 text-lg md:text-xl font-sans md:w-[90%]'>Welcome to our world of wagging tails, clinking glasses, and pawsitively good times! We're a bunch of passionate pet lovers who believe in making this world a more enjoyable place for everyone, furry or not. </p>
          <Link to='/products'>
            <Button />
          </Link>
        </main>
        <aside className='hidden w-1/2 h-full items-center justify-center md:flex relative'>
          <img src={apparel} alt='apparel hero img' className='w-[80%] h-[90%] absolute right-0 top-0 rounded-lg z-30' />
          <div className='absolute w-[25%] bg-clr-primary-8 h-[60%] top-[20%] left-16 rounded-lg z-10'></div>
          <img src={poppies} alt='apparel hero img' className='w-[50%] h-[30%] absolute left-5 top-[60%] rounded-lg z-30' />
        </aside>
      </section>
    </main>
  )
}

export default Herosection
