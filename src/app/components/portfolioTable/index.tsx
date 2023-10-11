import { IPorfolio, Portfolio } from '@/app/types/portfolio.type'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, IconButton, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GrEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import Link from 'next/link';

interface Iprops{
    portfolio:Portfolio,
    delete: (id:number) => void;
    isDeleted: boolean
    
}
const PortfolioTable = (props:Iprops) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef<HTMLInputElement>(null)
    const [deleteId, setDeleteId] = useState<number>(0)
    const [loading, setLoading] = useState(false);

    const deleteConfirm = (id:number) => {
        console.log(id, "ID")
        onOpen()
        setDeleteId(id)
    }
    
    useEffect(() => {
        console.log(props.isDeleted, "Is delete")
        if(props.isDeleted){
            onClose()

        }
    },[props.isDeleted])

  return (
 
       <>
       
    
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
                        <Link href={`/portfolio/${el.id}`}>
                        <IconButton aria-label='edit' icon={<GrEdit/>} variant={'outline'}/>
                        </Link>
                    </Td>
                    <Td>
                        <IconButton 
                        aria-label='delete' color={'red'} icon={<AiOutlineDelete/>} variant={'outline'}
                        onClick={() => {deleteConfirm(el.id)}}
                        />
     
                    </Td>
                
                </Tr>
            )
           })}
            
          
        </Tbody>
    </Table>
    <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Portfolio
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to delete this portfolio.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>
                Cancel
              </Button>
              <Button color={'red'} ml={3} onClick={() => {props.delete(deleteId)}} >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
</>
  )
}

export default PortfolioTable