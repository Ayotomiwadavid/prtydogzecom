import React from 'react'
import Productcard from './Productcard'
import { Link } from 'react-router-dom'

const Featured = () => {
    return (
        <section className='bg-clr-grey-10 w-full py-10  flex flex-col items-center justify-center'>
            <div className='w-full justify-center items-center flex flex-col relative'>
                <h1 className='font-bold w-full text-center text-[35px] capitalize text-clr-grey-1 py-3'>featured product</h1>
                <span className='h-[3px] w-[30%] md:w-[8%] bg-clr-primary-5 absolute bottom-2'></span>
            </div>
            <main className='px-[15px] md:px-[5vw] md:flex block items-center justify-center gap-5 py-10'>
                <Productcard />
                <Productcard />
                <Productcard />
            </main>
            <Link to='/products'>
            <button className='rounded-md py-2 px-5 cursor-pointer outline-none border-none capitalize bg-clr-primary-5 hover:bg-clr-primary-8 transition-all duration-500 shadow-lg text-clr-grey-10 hover:text-clr-primary-5'>all products</button>
            </Link>
        </section>
    )
}

export default Featured
