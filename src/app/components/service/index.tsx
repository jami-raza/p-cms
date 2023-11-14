import React from 'react'

const Service = () => {
  return (
    <div className='mb-[80px] md:px-20 lg:px-0'>
        <div className='text-center mb-8'>
        <p className='text-[15px] md:text-[17px]'>BEST SERVICES</p>
        <h4 className='text-[30px] md:text-[48px] font-bold text-[#46a7c8]'>Development with Future Vision</h4>
        </div>

        <div className='grid lg:grid-cols-2 gap-8'>
            <div className='bg-[#64748b] p-14 text-white'>
                <h4 className='text-[16px] md:text-[18px] font-semibold mb-4'>Web Apps Building</h4>
                <p className='text-[14px] md:text-[16px]'>I specialize in developing dynamic and responsive web applications that engage users and deliver seamless experiences. With ReactJS, I create intuitive interfaces that captivate your audience, while Next.js ensures optimal performance and visibility with server-rendered applications.</p>
            </div>

            <div className='bg-[#64748b] p-14 text-white'>
                <h4 className='text-[16px] md:text-[18px] font-semibold mb-4'>Wordpress Development</h4>
                <p className='text-[14px] md:text-[16px]'>Your site will be developed in WordPress, with revisions in stages to make sure you are totally happy. Development is done in any page builder like elementor wpbakery etc for easy site editing or Custom theme building.</p>
            </div>
        </div>
       
    </div>
  )
}

export default Service