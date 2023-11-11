"use client"
import React, { useState } from 'react'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea, Container, HStack, Icon, useToast, Image } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import FileUpload from '../fileUpload';
import { FiFile } from 'react-icons/fi'
import GalleryBox from '../galleryBox';

interface FormData {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string;
}

export const Form = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [imageGalleryOpen, setImageGalleryOpen] = useState(false)
  const [featuredImage, setFeaturedImage] = useState<string>("")
  const toast = useToast()
  // const [tags, setTags] = useState<string[]>([])
  const { handleSubmit, register, control, formState: { errors }, reset } = useForm<FormData>({

  });

  const onSubmit = async (formData: FormData) => {
    // Handle form submission here
    setIsLoading(true)

    const formV = new FormData()
    // const fileInput = Array.from(formData.image != null ? formData.image : []);
    // for (const file of fileInput) {
    //   formV.append('image', file);
    // }
    // const galleryInput = Array.from(formData.gallery != null ? formData.gallery : []);
    // for (const file of galleryInput) {
    //   formV.append('gallery', file);
    // }
    formV.append('title', formData.title)
    formV.append('subtitle', formData.subtitle)
    formV.append('category', formData.category)
    formV.append('description', formData.description)
    formV.append('tags', formData.tags)
    formV.append('gallery', JSON.stringify(galleryImages))
    formV.append('image', featuredImage)

    await fetch('/api/portfolio', {
      method: 'POST',
      body: formV
    }).then(async (r) => {
      setIsLoading(false)
      const data = await r.json()
      const mapD = data.data.map((el: any) => {
        return {
          ...el,
          gallery: JSON.parse(el.gallery)
        }
      })
      console.log(mapD, "Map d")
      // reset({
      //   title: '',
      //   subtitle: '',
      //   description: '',
      //   gallery: null,
      //   category: '',
      //   tags: '',
      //   image: null,
      // })

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

  const handleImageSelected = (select: string[]) => {
    console.log(select, "Selcted Image")

    setFeaturedImage(select[0])


  }

  console.log(errors, "Errors")



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

  const handleSelected = (select: string[]) => {
    console.log(select, "Selct")
    setGalleryImages(select)
    setGalleryOpen(false)
  }

  return (
    <Container my={'20px'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.title}>
          <FormLabel>Title</FormLabel>
          <Controller
            name="title"
            control={control}

            rules={{ required: 'Title is required' }}
            render={({ field }) => <Input {...field} />}
          />
          <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.subtitle}>
          <FormLabel>Subtitle</FormLabel>
          <Controller
            name="subtitle"
            control={control}

            rules={{ required: 'Subtitle is required' }}
            render={({ field }) => <Input {...field} />}
          />
          <FormErrorMessage>{errors.subtitle && errors.subtitle.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel>Description</FormLabel>
          <Controller
            name="description"
            control={control}

            rules={{ required: 'Description is required' }}
            render={({ field }) => <Textarea {...field} />}
          />
          <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
        </FormControl>
        <FormControl >
          <FormLabel>Feature Image</FormLabel>
          {featuredImage.length > 0
            ?

            <Image src={featuredImage} alt='Image' w={'120px'} my={'15px'} />
            :
            ""
          }
          {/* <FileUpload
            accept={'image/*'}
            multiple={false}
            register={register('image', { validate: validateFiles })}

          >
          </FileUpload> */}
          <Button leftIcon={<Icon as={FiFile} />} onClick={() => setImageGalleryOpen(true)}>
            Change
          </Button>
          {/* <FileUpload
            accept={'image/*'}
            multiple={false}
            register={register('image', { validate: validateFiles })}
           
          >
            <Button leftIcon={<Icon as={FiFile} />}>
              Upload
            </Button>
          </FileUpload> */}
        </FormControl>
        <FormControl >
          <FormLabel>Gallery</FormLabel>

          <Button leftIcon={<Icon as={FiFile} />} onClick={() => { setGalleryOpen(true) }}>
            Cloudinary Gallery
          </Button>
        </FormControl>



        {/* <FormControl>
        <FormLabel>Feature Image</FormLabel>
        Implement feature image upload here
      </FormControl> */}

        <FormControl isInvalid={!!errors.category}>
          <FormLabel>Category</FormLabel>
          <Controller
            name="category"
            control={control}

            rules={{ required: 'Category is required' }}
            render={({ field }) => <Input {...field} />}
          />
          <FormErrorMessage>{errors.category && errors.category.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.tags} >
          <FormLabel>Tags</FormLabel>
          <HStack>
            { }
            <Controller

              name="tags"
              control={control}
              rules={{ required: 'Tags are required' }}
              render={({ field }) => {
                console.log(field, "asd")
                return (

                  <Input {...field} />
                )

              }}

            />

            <Button

            >Add</Button>
          </HStack>
          <FormErrorMessage>{errors.tags && errors.tags.message}</FormErrorMessage>
        </FormControl>

        <Button mt={4} colorScheme='teal' variant='outline' type="submit" isLoading={isLoading}>
          Submit
        </Button>
      </form>

      <GalleryBox singleSelect={false} isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} handleSelected={handleSelected} />
      <GalleryBox
        singleSelect={true}
        isOpen={imageGalleryOpen}
        onClose={() => setImageGalleryOpen(false)}
        handleSelected={handleImageSelected}
      />
    </Container>
  )
}
