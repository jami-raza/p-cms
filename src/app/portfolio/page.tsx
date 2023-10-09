"use client"
import Image from 'next/image'
import { useEffect } from 'react'



export default function Portfolio() {

useEffect(() => {
    getPortfolio()
}, [])


    const getPortfolio = async () => {

        try {
            const response = await fetch('/api/portfolio', {method:'GET'})
            const data = await response.json()
            console.log(data, "DATA")
        
        } catch (error) {
            console.log(error, "Error")
        }
    }


  return (
    <main>
        hello world
    </main>
  )
}
