import React from 'react'
import Sponsors from './Sponsors'

const about = () => {
  return (
    <div name="about" className='w-full h-screen bg-black text-white'>
        <div className='max-w-screen mx-auto flex flex-col items-center justify-center w-full h-full'>
            <div className='pb-2 sm:mt-[230px] transform hover:scale-105 duration-700 ease-in-out'>
                <p className='text-slate-100 text-4xl font-bold inline border-b-2 cursor-default border-l-2 px-4 hover:text-slate-300 border-gray-500 my-auto'>
                About</p>
            </div>
            <p className='text-xl mt-1 whitespace-normal text-justify px-10 text-slate-200 p-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Porro quis autem aut architecto placeat, animi omnis natus numquam vero, 
            totam illum molestiae reprehenderit possimus error eos ducimus temporibus odio! Atque!
            Porro quis autem aut architecto placeat, animi omnis natus numquam vero, 
            totam illum molestiae reprehenderit possimus error eos ducimus temporibus odio! Atque!
            Porro quis autem aut architecto placeat, animi omnis natus numquam vero,
            totam illum molestiae reprehenderit possimus error eos ducimus temporibus odio! Atque!
            Porro quis autem aut architecto placeat, animi omnis natus numquam vero,
            Porro quis autem aut architecto placeat, animi omnis natus numquam vero,
            totam illum molestiae reprehenderit possimus error eos ducimus temporibus odio! Atque!
            Porro quis autem aut architecto placeat, animi omnis natus numquam vero,
            Porro quis autem aut architecto placeat, animi omnis natus numquam vero,
            </p>
            <Sponsors/>
        </div>
        
    </div>
  )
}

export default about