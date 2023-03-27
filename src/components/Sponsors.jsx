import React from 'react'
import logo1 from '../assests/logo1.png'
import logo2 from '../assests/logo2.png'
import logo3 from '../assests/logo3.png'
import logo4 from '../assests/logo4.png'

const Sponsors = () => {
  return (
    <div className='p-8'>    
        <div className='flex flex-row w-40 h-16 py-2 items-center justify-center sm:w-[100px]'>
            <img className='p-4' src={logo1} alt="" />
            <img className='p-4' src={logo2} alt="" />
            <img className='p-4' src={logo3} alt="" />
            <img className='p-4' src={logo4} alt="" />
        </div>
    </div>
  )
}

export default Sponsors