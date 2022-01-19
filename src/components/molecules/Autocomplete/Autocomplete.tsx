import * as React from 'react'
import Autocomplete, { AutocompleteClasses } from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import SearchIcon from '@heroicons/react/outline/SearchIcon'
import XIcon from '@heroicons/react/outline/XIcon'

export interface IAutocompleteProps {
  options: string[]
  value: string | null
  onChange: (value: string | null) => void
}

const AutocompleteComponent = ({
  options,
  value,
  onChange,
}: IAutocompleteProps) => (
  <Autocomplete
    options={options}
    autoHighlight
    value={value}
    onChange={(e, v) => onChange(v)}
    className='inline-block mt-56'
    classes={{
      listbox: 'p-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur',
      option: 'hover:bg-white',
      paper: 'rounded-sm shadow-md border border-white mt-1 bg-transparent',
    }}
    clearIcon={<XIcon className='w-4 h-4' />}
    handleHomeEndKeys
    clearOnBlur
    selectOnFocus
    clearText='Clear'
    closeText='Close'
    renderInput={(params) => (
      <div ref={params.InputProps.ref} className='inline-flex items-center '>
        <input
          type='text'
          {...params.inputProps}
          className='py-2 pl-3 pr-8 border border-gray-800 rounded-sm shadow-none focus:ring-0'
          placeholder='Search'
        />
        <SearchIcon className='w-6 h-6 -ml-8 text-gray-800' />
      </div>
    )}
  />
)

export default AutocompleteComponent
