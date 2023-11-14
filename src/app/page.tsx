"use client"
import Image from 'next/image'
import { Form } from './components/form'
import Link from 'next/link'
import Head from './components/head'
import About from './components/about'
import Experience from './components/experience'
import Service from './components/service'
import Certificate from './components/certificate'
import Contact from './components/contact'
import { useEffect, useState } from 'react'
import { Portfolio } from './types/portfolio.type'
import Portfolios from './components/portfolio'

export default function Home() {
  const [data, setData] = useState<Portfolio | null>()
 

  useEffect(() => {
    getPortfolio()
}, [])


const getPortfolio = async () => {

  try {
      const response = await fetch('/api/portfolio', { method: 'GET' })
      const data = await response.json()
      // console.log(data, "DATA")
      setData(data);
      
  } catch (error) {
      console.log(error, "Error")
  }
}

  return (
    <main className='max-w-[1440px] mx-auto px-[40px]'>
      {/* <Link href={'/portfolio'}>
      Portfolio
      </Link>
      <Form/> */}
        <Head/>
    <About/>
    <Experience/>
    <Service/>
    {data && 
    <Portfolios portfolio={data}/>
    }
    <Certificate/>
    <Contact/>
    </main>
  )
}
