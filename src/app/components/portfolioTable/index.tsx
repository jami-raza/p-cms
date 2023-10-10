import { IPorfolio, Portfolio } from '@/app/types/portfolio.type'
import { Box, IconButton, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { GrEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";

interface Iprops{
    portfolio:Portfolio,
    delete: (id:number) => void;
}
const PortfolioTable = (props:Iprops) => {
  return (
 
       
    <Table  variant={'simple'}>
        <Thead bgColor={'#e2e8f0'} color={'#000'} position="sticky"
        top="0"
        zIndex={10} boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)">
                
                <Tr>
                <Th>Image</Th>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Subtitle</Th>
                <Th>Description</Th>
                <Th>Category</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
                </Tr>
        </Thead>
     
        <Tbody>
           {props.portfolio.data.map((el,i)=>{
            return(
                <Tr key={i}>
                    <Td w={'120px'}><Image src={el.image} alt='Image'/></Td>
                    <Td>{el.id}</Td>
                    <Td>{el.name}</Td>

                    <Td maxW={'200px'}>
                    <Text noOfLines={[1,2]}>
                                        {el.subtitle}
                                        </Text>
                        </Td>

                    <Td maxW={'200px'}>
                    <Text noOfLines={[1,2]}>
                                        {el.description}
                                        </Text>
                    </Td>
                    <Td>{el.category}</Td>

                    <Td>
                        <IconButton aria-label='edit' icon={<GrEdit/>} variant={'outline'}/>
                    </Td>
                    <Td>
                        <IconButton 
                        aria-label='delete' color={'red'} icon={<AiOutlineDelete/>} variant={'outline'}
                        onClick={() => {props.delete(el.id)}}
                        />
                    </Td>
                
                </Tr>
            )
           })}
            
          
        </Tbody>
    </Table>
  

  )
}

export default PortfolioTable