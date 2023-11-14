import Image from 'next/image'
import React from 'react'
import TypewriterComponent from 'typewriter-effect';

const Head = () => {
  return (
    <div className='mt-[80px]'>
        
            <div className='flex items-center gap-[120px]  mt-[40px]'>
                <div className='hidden lg:block bg-gradient-to-r from-[#f64f59] [#c471ed] to-[#12c2e9] w-full max-w-[270px] max-h-[270px] rounded-full '>
                <Image className='rounded-full w-[270px] h-[270px] p-[5px]' src='/img/hero.png' alt='Imgae' width={250} height={250}/>

                </div>
                <div className='text-[22px] sm:text-[35px] text-center sm:text-left'>
                <h1>Empowering Businesses with Tailored <br className='hidden xl:block'/> Software Solutions: Your Partner in</h1>
               
                  <h1 className='font-bold text-[#46a7c8]'>

                <TypewriterComponent

 options={{
  strings: ['Web Apps Development', 'Software Develoment', 'Website Services'],
  autoStart:true,
  loop:true
 }}
/>
                  </h1>
         
                </div>
            </div>
        
      <div className='hidden md:block'>
        <div className='flex justify-between mt-[60px]'>
          <div className='flex lg:gap-14 md:gap-8'>
          <div className='flex gap-4 items-center'>
            <h3 className='text-[40px]'>4</h3>
            <p className='text-xs'>YEARS <br /> OF EXPERIENCE</p>
          </div>
          <div className='flex gap-4 items-center'>
            <h3 className='text-[40px]'>20</h3>
            <p className='text-xs'>PROJECTS COMPLETED <br /> SMARTLY</p>
          </div>
          </div>

          <div className='flex items-center gap-4'>
            <div >
            <p className='text-[12px] text-right'>GET IN TOUCH</p>
            <p className='text-[14px]'>muhammadjami45@gmail.com</p>
            </div>

            <div className='bg-[#8e8c904a] p-[5px]'>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"></path> </g></svg>
            </div>

          </div>
        </div>
        </div>
    </div>
  )
}

export default Head