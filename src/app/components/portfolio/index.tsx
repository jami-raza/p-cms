import { Portfolio } from '@/app/types/portfolio.type';
import Image from 'next/image'
import React from 'react'


interface Iprops{
  portfolio:Portfolio
}
const Portfolios = (props:Iprops) => {
  return (
    <div id='portfolio' className='mb-[80px]'>
        <div className='text-center mb-8'> 
        <p className='text-[15px] md:text-[17px]'>PORTFOLIO</p>
        <h4 className='text-[30px] md:text-[48px] font-bold text-[#46a7c8]'>My Recent Projects</h4>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
      {props.portfolio.data.map((port,i)=>{
       const tags =  JSON.parse(port.category);
      
        return(
          <div key={i} className='bg-white shadow-[1px_1px_14px_3px_#00000017] p-8 flex flex-col	 gap-4 mb-12 h-max'>
              <div>
                <h2 className='text-[18px] sm:text-[22px]'>{port.name}</h2>
                <p className='text-[13px] text-[#475569]'>{port.subtitle}</p>
              </div>
              <div>
                <Image src={port.image}alt='80scent' width={600} height={200}/>
              </div>

              <div>
                <ul className='list-none text-[12px] flex gap-2 flex-wrap'>
                {tags.map((el:any,i:any) =>(
                  
                  <li key={i} className='bg-[#46a7c8] text-white p-[5px]'>{el}</li>
                
                
      ))}
                </ul>

            
              </div>
          </div>

        )
      })}


         
       
         

        </div>

    </div>
  )
}

export default Portfolios