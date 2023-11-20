"use client"
import LoadingSpinner from '@/app/components/loading'
import { IPorfolio } from '@/app/types/portfolio.type'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Portfolios({ params }: { params: { id: string } }) {
    const [data, setData] = useState<IPorfolio>()
    useEffect(() => {
        let mounted = true;
        getPortfolio().then(res => {
          if (mounted) {
            setData({ ...res.data, gallery: JSON.parse(res.data.gallery) });
    
          }
          
        })
        return () => {mounted = false};
        
      }, [])
    
  const getPortfolio = async () => {
    const response = await fetch(`/api/portfolio/${params.id}`, { method: 'GET' })
    const res = await response.json()
    return res;

  }
  return (
    <div className='max-w-[1440px] mx-auto px-[40px] my-[60px]'>
        <div className='md:flex gap-12 mb-[40px]'>
            <div className='md:w-1/2'>
                <div className='mb-4'>
                <h1 className='text-[24px] md:text-[35px] text-[#46a7c8] mb-2'>{data?.name}</h1>
                <p className='text-[#a4a7b1]'>{data?.subtitle}</p>
                </div>
                <div className='mb-4'>
                    <h2  className='text-[16px] md:text-[18px] mb-2'>Description:</h2>
                    <p className='text-[#a4a7b1]'>{data?.description}</p>
                </div>
                <div className='mb-4'>
                    <h2 className='text-[16px] md:text-[18px] mb-2'>Category:</h2>
                    <p className='text-[#a4a7b1]'>{data ? JSON.parse(data?.category).join(",") : ""}</p>
                </div>
                <div className='mb-4'>
                    <h2 className='text-[16px] md:text-[18px] mb-2'>Tags:</h2>
                    <ul className='list-none flex flex-wrap gap-2 text-[12px]'>
                        {data ? JSON.parse(data.tags).map((el:any,i:any)=>{
                            return(

                                <li className='bg-[#46a7c8] text-white p-[5px]'>{el}</li>
                            )
                        })
                    : ""}
                    </ul>
                </div>
            </div>

            <div className='md:w-1/2'>
                <Image src={data ? data.image : ""} alt='Portfolio' width={1000} height={1000}/>
            </div>
        </div>

        <div>
        {data?.gallery.map((li: any, i: any) => (
                <Image key={i} src={`${li}`} alt='Image' width={1000} height={1000} />
              ))}
        </div>
    </div>
  )
}

 