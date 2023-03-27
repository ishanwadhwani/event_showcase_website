import React from 'react'
import '../components/Home.css'

const Home = () => {
  return (
    
    <div name="home" className='bg-black'>
        <div className='w-full h-[-90vh] top-[90px] '>
        </div>
        <div name="home" className=' w-full h-[90vh] top-[90px]' >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-8xl font-bold text-white sm:text-4xl animation-text p-2 flex flex-col'>
                        REFACTORIZE();
                        <span className='text-lg text-white p-6 sm:hidden'>"Join us for an amazing day of fun and learning!"</span>
                    </h2>
                    <div className="mt-[100px]">
                    <a href="https://forms.gle/Nx34SU95xN2VCerw9">
                        <button className= "transform hover:scale-105 duration-700 ease-in-out text-black font-bold w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-purple-400 via-slate-300 to-purple-700 mt-4 rounded-md">
                        Register Now</button>
                    </a>
                    </div>
                    </div>
                    </div>
                </div>
        </div>
  );
};

export default Home