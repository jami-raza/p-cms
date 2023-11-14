import React from 'react'

const About = () => {
  return (
    <div id='about' className='grid lg:grid-cols-2 gap-14 my-[80px] md:px-20 lg:px-0'>
        <div>
            <h1 className='mb-[20px] text-[24px] md:text-[35px] text-[#46a7c8] font-bold text-center lg:text-left'>ABOUT ME</h1>
            <p className='text-[#a4a7b1]'>Welcome to my digital realm, where innovation converges with code and technology transforms possibilities into realities. As a seasoned software developer freelancer, I specialize in crafting bespoke solutions that cater to your unique business needs. Whether you're a startup seeking a custom application or an established enterprise in pursuit of technical excellence, I'm here to architect the digital tools that drive your success.</p>
        </div>

        <div>
            <h1 className='mb-[20px] text-[24px] md:text-[35px] font-bold text-[#46a7c8] text-center lg:text-left'>EDUCATION</h1>
            <div className='mb-2'>
                <h2 className='text-[18px] md:text-[25px]'>Matriculation</h2>
                <div className='sm:flex justify-between text-[#a4a7b1]'>
                    <p>Karachi Folk's High School</p>
                    <p className='flex'><span className='hidden sm:block mr-2 text-black font-bold'>-</span>2016-09</p>
                </div>
            </div>
            <div className='mb-2'>
                <h2 className='text-[18px] md:text-[25px]'>Intermediate</h2>
                <div className='sm:flex justify-between text-[#a4a7b1]'>
                    <p>PECHS Government Degree Science College</p>
                    <p className='flex'><span className='hidden sm:block mr-2 text-black font-bold'>-</span>2018-10</p>
                </div>
            </div>
            <div>
                <h2 className='text-[18px] md:text-[25px]'>Cloud Computing</h2>
                <div className='sm:flex justify-between text-[#a4a7b1]'>
                    <p>PIAIC</p>
                    <p className='flex'><span className='hidden sm:block mr-2 text-black font-bold'>-</span>Ongoing</p>
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default About