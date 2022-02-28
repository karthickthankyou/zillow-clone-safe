/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import SearchIcon from '@heroicons/react/outline/SearchIcon'

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
    'renderInput' | 'filterOptions'
  >
) => (
  <Autocomplete
    classes={{
      listbox:
        'p-0 bg-opacity-90 bg-white/50 backdrop-filter backdrop-blur max-h-64',
      option: 'hover:bg-white bg-opacity-100',
      paper: 'rounded-md shadow-md border border-white mt-1 bg-transparent',
    }}
    handleHomeEndKeys
    filterOptions={(x) => x}
    // ListboxProps={{
    //   style: {
    //     maxHeight: '150px',
    //   },
    // }}
    renderInput={(params) => (
      <div ref={params.InputProps.ref} className='flex items-center w-full '>
        <input
          type='text'
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params.inputProps}
          className='py-2 pl-3 pr-8 bg-gray-100 rounded-md shadow-none focus:ring-0'
          placeholder='Search'
        />
        <SearchIcon className='w-6 h-6 -ml-8 text-gray-800 ' />
      </div>
    )}
    {...props}
  />
)

export default AutocompleteComponent
