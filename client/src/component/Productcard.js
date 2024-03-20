import React from 'react'
import dogImage from '../images/herodog.jpg'
import SearchIcon from '@mui/icons-material/Search';
import "../index.css"
import { Link } from 'react-router-dom';

const Productcard = () => {
    return (
        <main className='rounded-sm productCrad my-12 h-[225px] w-[320px] md:w-[300px] relative flex flex-col items-center justify-center bg-transparent md:mx-5'>
            <img src={dogImage} alt='product img' className='rounded-sm w-full h-[90%]' />
            <div className='rounded-sm productsearchContainer absolute w-full top-0 right-0 left-0 flex items-center justify-center h-[85%]'>
                <div className='w-[40px] h-[40px] transition-all duration-300 rounded-full bg-clr-primary-5 flex items-center justify-center'>
                    <Link to='/product/:id'>
                        <SearchIcon
                            style={{
                                color: "#fff",
                                fontSize: "25px",
                                fontWeight: "bolder"
                            }}
                        />
                    </Link>
                </div>
            </div>
            <div className='w-full flex h-[10%] items-center justify-between py-5'>
                <p className='font-light text-lg text-left text-black'>High-Back Bench</p>
                <p className='font-light text-lg text-right text-clr-primary-5'>$399.99</p>
            </div>
        </main>
    )
}

export default Productcard
