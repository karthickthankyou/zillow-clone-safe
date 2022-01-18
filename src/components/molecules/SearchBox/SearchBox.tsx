import { SearchIcon } from '@heroicons/react/outline'
import { ComponentType } from 'react'
import Select, {
  components,
  DropdownIndicatorProps,
  GroupBase,
} from 'react-select'
// import tw from 'twin.macro'

export interface ISearchBoxProps {
  className?: string
}

// const customStyles = {
//   option: (provided, state) => tw`p-3 hover:bg-white`,

//   control: () => tw`z-10 flex p-3 bg-white rounded-md shadow-md`,
//   menu: (provided) => ({
//     ...provided,
//     ...tw`bg-white rounded-md shadow-md backdrop-filter backdrop-blur bg-opacity-80`,
//   }),
//   base: (provided) => ({ ...provided }),
// }

const options = [
  {
    value: 'Apple Valley',
    label: 'Apple Valley',
  },
  {
    value: 'Atlanta',
    label: 'Atlanta',
  },
  {
    value: 'Bakersfield',
    label: 'Bakersfield',
  },
  {
    value: 'Baltimore',
    label: 'Baltimore',
  },
  {
    value: 'Blaine',
    label: 'Blaine',
  },
  {
    value: 'Boston',
    label: 'Boston',
  },
  {
    value: 'Brecksville',
    label: 'Brecksville',
  },
  {
    value: 'Brooklyn',
    label: 'Brooklyn',
  },
  {
    value: 'Brookpark',
    label: 'Brookpark',
  },
  {
    value: 'Buffalo',
    label: 'Buffalo',
  },
  {
    value: 'Charlotte',
    label: 'Charlotte',
  },
  {
    value: 'Chesapeake',
    label: 'Chesapeake',
  },
  {
    value: 'Chicago',
    label: 'Chicago',
  },
  {
    value: 'Cleveland',
    label: 'Cleveland',
  },
  {
    value: 'Colorado Springs',
    label: 'Colorado Springs',
  },
  {
    value: 'Crafton',
    label: 'Crafton',
  },
  {
    value: 'Denver',
    label: 'Denver',
  },
  {
    value: 'Detroit',
    label: 'Detroit',
  },
  {
    value: 'Far Rockaway',
    label: 'Far Rockaway',
  },
  {
    value: 'Ferndale',
    label: 'Ferndale',
  },
  {
    value: 'Flushing',
    label: 'Flushing',
  },
  {
    value: 'Gilbert',
    label: 'Gilbert',
  },
  {
    value: 'Henderson',
    label: 'Henderson',
  },
  {
    value: 'Hoover',
    label: 'Hoover',
  },
  {
    value: 'Irvine',
    label: 'Irvine',
  },
  {
    value: 'Lakewood',
    label: 'Lakewood',
  },
  {
    value: 'Las Vegas',
    label: 'Las Vegas',
  },
  {
    value: 'Lincoln',
    label: 'Lincoln',
  },
  {
    value: 'Long Beach',
    label: 'Long Beach',
  },
  {
    value: 'Los Angeles',
    label: 'Los Angeles',
  },
  {
    value: 'Louisville',
    label: 'Louisville',
  },
  {
    value: 'Madison',
    label: 'Madison',
  },
  {
    value: 'Memphis',
    label: 'Memphis',
  },
  {
    value: 'Mesa',
    label: 'Mesa',
  },
  {
    value: 'Milwaukee',
    label: 'Milwaukee',
  },
  {
    value: 'Minneapolis',
    label: 'Minneapolis',
  },
  {
    value: 'Mira Loma',
    label: 'Mira Loma',
  },
  {
    value: 'Nashville',
    label: 'Nashville',
  },
  {
    value: 'Omaha',
    label: 'Omaha',
  },
  {
    value: 'Orlando',
    label: 'Orlando',
  },
  {
    value: 'Paradise Valley',
    label: 'Paradise Valley',
  },
  {
    value: 'Philadelphia',
    label: 'Philadelphia',
  },
  {
    value: 'Phoenix',
    label: 'Phoenix',
  },
  {
    value: 'Pittsburgh',
    label: 'Pittsburgh',
  },
  {
    value: 'Portland',
    label: 'Portland',
  },
  {
    value: 'Raleigh',
    label: 'Raleigh',
  },
  {
    value: 'Richmond',
    label: 'Richmond',
  },
  {
    value: 'San Diego',
    label: 'San Diego',
  },
  {
    value: 'San Jose',
    label: 'San Jose',
  },
  {
    value: 'Santa Ana',
    label: 'Santa Ana',
  },
  {
    value: 'Scottsdale',
    label: 'Scottsdale',
  },
  {
    value: 'Seattle',
    label: 'Seattle',
  },
  {
    value: 'Spokane',
    label: 'Spokane',
  },
  {
    value: 'Tampa',
    label: 'Tampa',
  },
  {
    value: 'Tigard',
    label: 'Tigard',
  },
  {
    value: 'Tucson',
    label: 'Tucson',
  },
  {
    value: 'Tulsa',
    label: 'Tulsa',
  },
  {
    value: 'Washington',
    label: 'Washington',
  },
]

export const DropdownIndicator = (
  props: DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>
) =>
  components.DropdownIndicator && (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <components.DropdownIndicator {...props}>
      <SearchIcon className='w-5 h-5 text-black ' aria-hidden='true' />
    </components.DropdownIndicator>
  )

const SearchBox = ({ className }: ISearchBoxProps) => (
  <Select
    className={` ${className}`}
    isClearable
    isSearchable
    placeholder='Search...'
    // styles={customStyles}
    options={options}
    components={{ DropdownIndicator, IndicatorSeparator: () => null }}
  />
)

export default SearchBox
