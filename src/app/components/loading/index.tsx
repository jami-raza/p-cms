import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const LoadingSpinner = () => {
  return (
    <Box height={'100vh'} w={'100%'} display={'flex'}  alignItems={'center'} justifyContent={'center'} >
    <Spinner 
    color='red' 
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    size='xl'
    />
    </Box>
  )
}

export default LoadingSpinner