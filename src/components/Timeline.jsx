import React from 'react'


const Timeline = () => {
  return (
    <div name='events' className='flex flex-col items-center justify-center bg-black'>
            <div className='pb-2 sm:mt-[300px] transform hover:scale-105 duration-700 ease-in-out'>
                <p className='text-slate-100 text-4xl font-bold inline border-b-4 cursor-default border-l-2 px-4 py-1 hover:text-slate-300 border-gray-500'>
                Timeline</p>
            </div>
        <section className='w-[1100px] sm:w-[355px]'>
            <div className='sticky top-0 bg-black py-3 px-2 z-10 shadow-xl shadow-black'>
                <h2 className='text-4xl text-gray-300 px-3 py-8 mt-4 font-bold tracking-widest'>March 31st</h2>
            </div>
            <div className='timeine'>
                <div className='relative'>
                    <div className='dot' title="current event">
                        <div className='dot absolute -top-1 -left-1 animate-ping'></div>
                    </div>
                    <div className='pl-10'>
                    <span className='timeline-date'>12:00 PM</span>
                    <h3 className='timeline-title'>Opening Ceremony</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='dot'></div>
                    <div className='pl-10'>
                    <span className='timeline-date'>12:30 PM</span>
                    <h3 className='timeline-title'>Ideathon Presentation</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='dot'></div>
                    <div className='pl-10'>
                    <span className='timeline-date'>1:00 PM</span>
                    <h3 className='timeline-title'>Synthesize();</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='dot'></div>
                    <div className='pl-10'>
                    <span className='timeline-date'>2:00 PM</span>
                    <h3 className='timeline-title'>AWS Panel Talk</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
            </div>
        </section>

        <section className='w-[1100px] sm:w-[355px]'>
            <div className='sticky top-0 bg-black py-3 z-10 shadow-xl shadow-black'>
                <h2 className='text-4xl text-gray-300 px-3 py-8 mt-4 font-bold tracking-widest '>April 1st</h2>
            </div>
            <div className='timeine'>
                <div className='relative'>
                    <div className='dot'></div>
                    <div className='pl-10'>
                    <span className='timeline-date'>2:00 PM</span>
                    <h3 className='timeline-title'>CryptX</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='dot'></div>
                    <div className='pl-10'>
                    <span className='timeline-date'>4:00 PM</span>
                    <h3 className='timeline-title'>Visualize();</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='dot'></div>
                    <div className='pl-10'>
                    <span className='timeline-date'>7:00 PM</span>
                    <h3 className='timeline-title'>Exquizite();</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
            </div>
        </section>

        <section className='w-[1100px] sm:w-[355px]'>
            <div className='sticky top-0 bg-black py-3 z-10 shadow-xl shadow-black'>
                <h2 className='text-4xl text-gray-300 px-3 py-8 mt-4  font-bold tracking-widest '>April 2nd</h2>
            </div>
            <div className='timeine'>
                <div className='relative'>
                    <div className='dot' title="current event">
                        {/* <div className='dot absolute -top-1 -left-1 animate-ping'></div> */}
                    </div>
                    <div className='pl-10'>
                    <span className='timeline-date'>1:30 AM</span>
                    <h3 className='timeline-title'>Synthesize();</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='dot'></div>
                    <div className='pl-10'>
                    <span className='timeline-date'>11:00 AM</span>
                    <h3 className='timeline-title'>Presentation</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='dot'></div>
                    <div className='pl-10'>
                    <span className='timeline-date'>8:00 PM</span>
                    <h3 className='timeline-title'>CryptX End</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='dot'></div>
                    <div className='pl-10'>
                    <span className='timeline-date'>6:00 PM</span>
                    <h3 className='timeline-title'>Exquizite();</h3>
                    <p className='about-event'>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus officia alias, nobis quaerat itaque consequatur
                    optio odio fugit voluptate architecto porro voluptatum facere reiciendis.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Timeline