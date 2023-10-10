"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Portfolio } from '../types/portfolio.type'
import PortfolioTable from '../components/portfolioTable'
import { Text } from '@chakra-ui/react'



export default function Portfolio() {
const [data,setData] = useState<Portfolio | null>()
useEffect(() => {
    getPortfolio()
}, [])


    const getPortfolio = async () => {

        try {
            const response = await fetch('/api/portfolio', {method:'GET'})
            const data = await response.json()
            console.log(data, "DATA")     
            setData(data);
        } catch (error) {
            console.log(error, "Error")
        }
    }


  return (
    <main>
      
        {data && <PortfolioTable portfolio={data}/>}
    
    </main>
  )
}
