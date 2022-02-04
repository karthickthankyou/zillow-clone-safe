/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import SearchIcon from '@heroicons/react/outline/SearchIcon'
import XIcon from '@heroicons/react/outline/XIcon'

// export interface IAutocompleteProps {
//   value?: string
//   options: string[]
//   onChange: AutocompleteProps<string, false, false, false>['onChange']
//   onInputChange: AutocompleteProps<string, false, false, false>['onInputChange']
//   className?: string
//   loading?: boolean
// }

const AutocompleteComponent = <
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(
  props: Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    'renderInput'
  >
) => (
  <Autocomplete
    classes={{
      listbox: 'p-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur',
      option: 'hover:bg-white bg-opacity-100',
      paper: 'rounded-lg shadow-md border border-white mt-1 bg-transparent',
    }}
    handleHomeEndKeys
    renderInput={(params) => (
      <div ref={params.InputProps.ref} className='flex items-center w-full'>
        <input
          type='text'
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params.inputProps}
          className='py-3 pl-3 pr-8 border border-gray-800 rounded-lg shadow-none focus:ring-0'
          placeholder='Search'
        />
        <SearchIcon className='w-6 h-6 -ml-8 text-gray-800 ' />
      </div>
    )}
    {...props}
  />
)

// function AutocompleteComponent<
//   T,
//   Multiple extends boolean | undefined,
//   DisableClearable extends boolean | undefined,
//   FreeSolo extends boolean | undefined
// >  (props: AutocompleteProps) (
//   <Autocomplete
//     {...props}
//     classes={{
//       listbox: 'p-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur',
//       option: 'hover:bg-white bg-opacity-100',
//       paper: 'rounded-lg shadow-md border border-white mt-1 bg-transparent',
//     }}
//     handleHomeEndKeys
//     renderInput={(params) => (
//       <div ref={params.InputProps.ref} className='flex items-center w-full'>
//         <input
//           type='text'
//           // eslint-disable-next-line react/jsx-props-no-spreading
//           {...params.inputProps}
//           className='py-3 pl-3 pr-8 border border-gray-800 rounded-lg shadow-none focus:ring-0'
//           placeholder='Search'
//         />
//         <SearchIcon className='w-6 h-6 -ml-8 text-gray-800 ' />
//       </div>
//     )}
//   />
// )

export default AutocompleteComponent
