export interface IImageUploadProps {}

const ImageUpload = () => (
  <div className='flex flex-col items-center h-full'>
    <label className='border-4 border-blue-200 border-dashed rounded'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-sm tracking-wider text-gray-600'>Attach a file</p>
      </div>
      <input type='file' multiple className='opacity-0' />
    </label>

    <button type='button' className='w-full text-white bg-blue-500 rounded'>
      Upload
    </button>
  </div>
)

export default ImageUpload
