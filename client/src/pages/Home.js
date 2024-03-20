import React from 'react'
import Herosection from '../component/Herosection'
import Featured from '../component/Featured'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <Herosection />
    <Featured />
    </div>
  )
}

export default Home
