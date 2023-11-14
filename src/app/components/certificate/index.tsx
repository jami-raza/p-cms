"use client"
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Certificate = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 300 },
      items: 1,
      
      // slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
  
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      
      // slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className='mb-[80px]'>
        <div className='text-center mb-8'>
        <h4 className='text-[30px] md:text-[48px] font-bold text-[#46a7c8]'>CERTIFICATION</h4>
        </div>
    <div >
    <Carousel className='text-center'showDots={true}  responsive={responsive}  swipeable={ 'mobile' ? true : false}
   infinite={true}  removeArrowOnDeviceType={["tablet", "mobile"]}>
  <div className='w-full flex items-center justify-center mb-14'><Image src='/img/cert1.png' alt='certificate' width={1000} height={500} className='md:px-20' /></div>
  <div className='w-full flex items-center justify-center mb-14'><Image src='/img/cert1.png' alt='certificate' width={1000} height={500} className='md:px-20' /></div>
  <div className='w-full flex items-center justify-center mb-14'><Image src='/img/cert1.png' alt='certificate' width={1000} height={500} className='md:px-20' /></div>
  <div className='w-full flex items-center justify-center mb-14'><Image src='/img/cert1.png' alt='certificate' width={1000} height={500} className='md:px-20' /></div>
  <div className='w-full flex items-center justify-center mb-14'><Image src='/img/cert1.png' alt='certificate' width={1000} height={500} className='md:px-20' /></div>

</Carousel>
    </div>
  

    </div>
  )
}

export default Certificate