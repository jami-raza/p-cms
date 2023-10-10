import { ReactNode, useRef } from 'react'
import { Button, FormControl, FormErrorMessage, FormLabel, Icon, InputGroup } from '@chakra-ui/react'
import { useForm, UseFormRegisterReturn } from 'react-hook-form'

type FileUploadProps = {
    register: UseFormRegisterReturn
    accept?: string
    multiple?: boolean
    children?: ReactNode
  }
  
  const FileUpload = (props: FileUploadProps) => {
    const { register, accept, multiple, children } = props
    const inputRef = useRef<HTMLInputElement | null>(null)
    const { ref, ...rest } = register as {ref: (instance: HTMLInputElement | null) => void}
  
    const handleClick = () => inputRef.current?.click()
  
    return (
        <InputGroup onClick={handleClick}>
          <input
            type={'file'}
            multiple={multiple || false}
            hidden
            accept={accept}
            {...rest}
            ref={(e) => {
              ref(e)
              inputRef.current = e
            }}

          />
          <>
            {children}
          </>
        </InputGroup>
    )
  }

  export default FileUpload