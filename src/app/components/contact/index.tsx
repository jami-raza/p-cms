import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='mb-[80px]'>
          <div className='text-center mb-8'> 
        <p className='text-[17px]'>CONTACT US</p>
        <h4 className='text-[30px] md:text-[35px] font-bold text-[#46a7c8]'>Let’s Get in Touch And Make <br /> Magic Together.</h4>
        </div>

        <div className='md:px-20'>
            <div className='lg:flex gap-8 mb-8'>
                <input type="text" placeholder='Name' className='w-full border-b-2 mb-8 lg:mb-0 py-4 focus:outline-none'/>
                <input type="email" placeholder='Email' className='w-full border-b-2 py-4 focus:outline-none'/>
            </div>
            <div>
                <textarea name="" id="" placeholder='Message' className='w-full border-b-2 py-4 mb-8 focus:outline-none'></textarea>
            </div>
            <button className='flex m-auto border-[1px] rounded-sm transition ease-in-out delay-150 duration-200 hover:translate border-black py-2 px-4 hover:bg-black hover:text-white'>Send Message</button>
        </div>
    </div>
  )
}

export default Contact