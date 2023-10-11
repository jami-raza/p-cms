"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Portfolio } from '../types/portfolio.type'
import PortfolioTable from '../components/portfolioTable'
import { Text, useToast } from '@chakra-ui/react'



export default function Portfolio() {
    const [data, setData] = useState<Portfolio | null>()
    const [isDelete, setIsDelete] = useState<boolean>(false)
    

  const toast = useToast()
    useEffect(() => {
        getPortfolio()
    }, [])


    const getPortfolio = async () => {

        try {
            const response = await fetch('/api/portfolio', { method: 'GET' })
            const data = await response.json()
            console.log(data, "DATA")
            setData(data);
            setIsDelete(false)
        } catch (error) {
            console.log(error, "Error")
        }
    }

    


    const deletePortfolio = async (id: number) => {
        try {
    
            const response = await fetch(`/api/portfolio/${id}`, { method: 'DELETE' })
            const data = await response.json()
            console.log(data, "DATA")
            toast({
                title: 'Portfolio deleted successfully',
                status: 'success',
                isClosable: true,
                duration: 2000,
                position: "top-right"
              })
         
              setIsDelete(true)
              getPortfolio()

        } catch (error) {
            console.log(error, "Error")
        }
    }


    return (
        <main>

            {data && <PortfolioTable portfolio={data}
                delete={deletePortfolio}
                isDeleted={isDelete} 
            />}

        </main>
    )
}
