/* eslint-disable react/jsx-props-no-spreading */
import { ChangeEventHandler } from 'react'
import { useDropzone, DropzoneOptions } from 'react-dropzone'

export interface IDropZoneProps {}

const DropZone = (
  props: DropzoneOptions & {
    onChange: ChangeEventHandler<HTMLInputElement>
    value: any
  }
) => {
  const { onChange, input } = props
  const { getRootProps, getInputProps } = useDropzone(props)

  return (
    <div
      {...getRootProps()}
      className='flex items-center justify-center p-4 text-xs text-center text-gray-600 bg-gray-100 border-4 border-gray-300 border-dashed rounded shadow-inner'
    >
      <input {...getInputProps({ onChange })} />
      Drop images here or click to upload
      {input.value
        ? input.value?.map((file: { path: string | null | undefined }) => (
            <div key={file.path}>{file.path}</div>
          ))
        : null}
    </div>
  )
}

export default DropZone
