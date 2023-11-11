"use client"
import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea, Container, HStack, Icon, useToast, Image, Box } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import FileUpload from '@/app/components/fileUpload';
import { FiFile } from 'react-icons/fi'
import GalleryBox from '@/app/components/galleryBox';
import { IPorfolio, Portfolio } from '@/app/types/portfolio.type';

interface FormData {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string;
  image: string;
}

export default function UpdatePortfolio({ params }: { params: { id: string } }) {

  const [isLoading, setIsLoading] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [imageGalleryOpen, setImageGalleryOpen] = useState(false)

  const toast = useToast()
  const [data, setData] = useState<IPorfolio>()
  useEffect(() => {
    let mounted = true;
    getPortfolio().then(res => {
      if (mounted) {
        setData({ ...res.data, gallery: JSON.parse(res.data.gallery) });

      }

    })
    return () => {mounted = false};
  }, [])


  const getPortfolio = async () => {
    const response = await fetch(`/api/portfolio/${params.id}`, { method: 'GET' })
    const res = await response.json()
    return res;

  }



  const { handleSubmit, register, control, formState: { errors }, reset } = useForm<FormData>({

  });

  const onSubmit = async (formData: FormData) => {
    // Handle form submission here
    setIsLoading(true)

    const formV = new FormData()

    // const galleryInput = Array.from(formData.gallery != null ? formData.gallery : []);
    // for (const file of galleryInput) {
    //   formV.append('gallery', file);
    // }
    formV.append('title', formData.title)
    formV.append('subtitle', formData.subtitle)
    formV.append('category', formData.category)
    formV.append('description', formData.description)
    formV.append('tags', formData.tags)
    formV.append('gallery', JSON.stringify(data?.gallery))
    formV.append('image', data ? data.image : "")

    await fetch(`/api/portfolio/${params.id}`, {
      method: 'PUT',
      body: formV
    }).then(async (r) => {
      setIsLoading(false)
      // const data = await r.json()
      // const mapD = data.data.map((el: any) => {
      //   return {
      //     ...el,
      //     gallery: JSON.parse(el.gallery),
      //   }
      // })
      // console.log(mapD, "Map d")
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



  console.log(data, "DATA")





  const handleSelected = (select: string[]) => {
    console.log(select, "Selct")
    let dat = data
    if (dat) {
      let dataGallery = dat.gallery
      setData({ ...dat, gallery: [...dataGallery, ...select] })

    }
    setGalleryOpen(false)
  }
  const handleImageSelected = (select: string[]) => {
    console.log(select, "Selcted Image")
    let da = data
    if (da)
      setData({ ...da, image: select[0] })

    // let da = [...data,]
    // setData()
  }



  return (
    <Container my={'20px'}>
      {data ?

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.title}>
            <FormLabel>Title</FormLabel>
            <Controller
              name="title"
              control={control}
              defaultValue={data.name}
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
              defaultValue={data?.subtitle}
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
              defaultValue={data?.description}
              rules={{ required: 'Description is required' }}
              render={({ field }) => <Textarea {...field} />}
            />
            <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.image}>
            <FormLabel>Feature Image</FormLabel>
            <Image src={data?.image} alt='Image' w={'120px'} my={'15px'} />
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
            <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>
          </FormControl>
          <FormControl mb={'20px'}>
            <FormLabel>Gallery</FormLabel>
            <Box display={'flex'} gap={5} my={'15px'}>
              {data.gallery.map((li: any, i: any) => (
                <Image key={i} src={`${li}`} alt='Image' w={'100px'} />
              ))}
            </Box>
            <Button leftIcon={<Icon as={FiFile} />} onClick={() => { setGalleryOpen(true) }}>
              Change Cloudinary Gallery
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
              defaultValue={data?.category}
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
                defaultValue={data ? JSON.parse(data?.tags).join(",") : ""}
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
        :
        <>

        </>
      }
      <GalleryBox
        singleSelect={false}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        handleSelected={handleSelected}
      />
      <GalleryBox
        singleSelect={true}
        isOpen={imageGalleryOpen}
        onClose={() => setImageGalleryOpen(false)}
        handleSelected={handleImageSelected}
      />
    </Container>
  )
}
