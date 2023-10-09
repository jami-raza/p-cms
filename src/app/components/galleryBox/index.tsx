"use client"
import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, Text, VisuallyHiddenInput, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import FileUpload from '../fileUpload'
import { useForm } from 'react-hook-form'
import { FiFile } from 'react-icons/fi'

interface FormData {
    gallery: FileList | null;
}

type Props = {
    isOpen: boolean;
    onClose: () => void;
    handleSelected: (string: string[]) => void;
    singleSelect: boolean;
}

const GalleryBox = ({ isOpen, onClose, handleSelected, singleSelect }: Props) => {

    const [gallery, setGallery] = useState<string[]>([])
    const [selected, setSelected] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const uploadRef = useRef<HTMLInputElement | null>(null)
    // const [tags, setTags] = useState<string[]>([])
    const { handleSubmit, register, control, formState: { errors }, reset } = useForm<FormData>();
    useEffect(() => {
        getImages()
    }, [])

    const toast = useToast()



    const getImages = async () => {

        const data = await fetch(`/api/gallery`, { method: 'GET' })
        const res = await data.json()
        console.log(res, "DATA")
        if (data.ok) {
            const imageUrls = res?.data?.resources.map((el: any) => el.secure_url)
            setGallery(imageUrls);

        } else {
            console.log(res, "Res")
            const errorMessage = res?.error?.message
            toast({
                title: 'Error',
                description: errorMessage,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }
    const handleCheckboxChange = (value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            console.log(value)
            let imagesSelected = [...selected]
            setSelected([...imagesSelected, value])
        } else {
            let imageRemove = [...selected].filter(el => el != value)
            setSelected(imageRemove)
        }

        if (singleSelect) {

        }
    }

    console.log(selected, "Selected images")

    const validateFiles = (value: FileList | null) => {
        if (value) {

            if (value.length < 1) {
                return 'Files is required'
            }
            for (const file of Array.from(value)) {
                const fsMb = file.size / (1024 * 1024)
                const MAX_FILE_SIZE = 10
                if (fsMb > MAX_FILE_SIZE) {
                    console.log('Max file size 10mb')
                    return 'Max file size 10mb'
                }
            }
            return true
        } else {
            return "File is required";
        }

    }

    const onSubmit = async (formData: FormData) => {
        // Handle form submission here
        setIsLoading(true)

        const formV = new FormData()

        const galleryInput = Array.from(formData.gallery != null ? formData.gallery : []);
        for (const file of galleryInput) {
            formV.append('gallery', file);
        }


        await fetch('/api/upload', {
            method: 'POST',
            body: formV
        }).then(r => {
            console.log(r.json())
            setIsLoading(false)
            reset({
                gallery: null,
            })

            toast({
                title: 'Portfolio created successfully',
                status: 'success',
                isClosable: true,
                duration: 3000,
                position: "top-right"
            })
        }).catch(e => {
            console.log(e, "Error")
            toast({
                title: JSON.stringify(e),
                status: 'success',
                isClosable: true,
                duration: 3000,
                position: "top-right"
            })
            setIsLoading(false)

        })


    }

    const clickUpload = () => {
        uploadRef.current?.click()
    }

    const uploadHandler = async (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget?.files, "Files")

        setIsLoading(true)
        const files = e.currentTarget?.files
        const formV = new FormData()
        const galleryInput = Array.from(files != null ? files : []);
        for (const file of galleryInput) {
            formV.append('gallery', file);
        }


        await fetch('/api/upload', {
            method: 'POST',
            body: formV
        }).then(async (r) => {

            const data = await r.json()
            console.log(data, "Data json")
            setIsLoading(false)


            toast({
                title: 'image created successfully',
                status: 'success',
                isClosable: true,
                duration: 3000,
                position: "top-right"
            })
            let newGallery = [...data, ...gallery]
            setGallery(newGallery)
        }).catch(e => {
            console.log(e, "Error")
            toast({
                title: JSON.stringify(e),
                status: 'success',
                isClosable: true,
                duration: 3000,
                position: "top-right"
            })
            setIsLoading(false)

        })
    }



    return (
        <div>


            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}
                size={'4xl'}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Gallery</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)}></form>
                        <FormControl isInvalid={!!errors.gallery}>

                            <VisuallyHiddenInput type="file" multiple onChange={uploadHandler} id='upload-in'
                                ref={uploadRef}
                            />
                            <FormErrorMessage>{errors.gallery && errors.gallery.message}</FormErrorMessage>
                        </FormControl>
                        <Button onClick={clickUpload} isLoading={isLoading}>Upload</Button>
                        <Text fontWeight='bold' mb='1rem'>
                            Images
                        </Text>
                        <Box display={'flex'} flexWrap={'wrap'}>

                            {
                                gallery.map((el, i) => {
                                    return (
                                        <Box key={i} width={'20%'}>
                                            {singleSelect ? (

                                                <Radio value={el}>
                                                    <Image src={el} alt='' width={100} height={100} />

                                                </Radio>
                                            ) :
                                                (

                                                    <Checkbox colorScheme='purple' onChange={handleCheckboxChange(el)}
                                                    >
                                                        <Image src={el} alt='' width={100} height={100} />
                                                    </Checkbox>
                                                )}


                                        </Box>
                                    )
                                })
                            }
                        </Box>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' isDisabled={selected.length === 0}
                            onClick={() => { 
                                handleSelected(selected)
                                setSelected([])
                            }}
                        >Selected {selected.length}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default GalleryBox