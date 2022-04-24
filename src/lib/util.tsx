import Link from 'src/components/atoms/Link/Link'
import { notify } from 'src/hooks'
import { AllColors } from 'src/types'

export const getQueryParam = (
  searchParam: string | string[] | undefined,
  defaultValue?: string
): string => {
  if (!searchParam) return defaultValue || ''
  return Array.isArray(searchParam) ? searchParam[0] : searchParam
}

export type OptionalPick<T, K extends PropertyKey> = Pick<
  T,
  Extract<keyof T, K>
>

export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> &
  Pick<T, TRequired>

export const matchQuery = (op: any, queryname: string) =>
  op.query.definitions[0].name.value === queryname

export const shortenNumber = (value: number) => {
  const units = ['', 'K', 'M']

  let unitIndex = 0
  let scaledValue = value

  while (scaledValue >= 1000 && unitIndex < units.length - 1) {
    unitIndex += 1
    scaledValue = Math.round((scaledValue / 1000) * 100) / 100
  }

  return `${scaledValue} ${units[unitIndex]}`
}

export const addDollar = (value: string) => `$${value}`

export const bringHighlightedItemToFront = (id: any, items: { id: any }[]) => {
  if (!id) return items

  const itemFound = items.find((item) => item.id === id)

  if (!itemFound) return items
  return [...items.filter((item) => item.id !== id), itemFound]
}

export const getInitials = (text: string) =>
  text
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

export const toAcres = (sqft: number) => (sqft / 43560).toFixed(2)

export const loginNotification = () =>
  notify({
    type: 'warning',
    message: (
      <div>
        <div className='font-semibold'>You are not logged in.</div>
        <Link
          href='/login'
          className='inline-block px-2 py-1 mt-2 text-white rounded bg-primary'
        >
          Login
        </Link>
      </div>
    ),
  })

export const bgClasses: { [key in AllColors]: string } = {
  primary: 'bg-primary',
  black: 'bg-black',
  white: 'bg-white',
  red: 'bg-red',
  yellow: 'bg-yellow',
  green: 'bg-green',
  gray: 'bg-gray',
}

export const colorClasses: { [key in AllColors]: string } = {
  primary: 'text-primary',
  black: 'text-black',
  white: 'text-white',
  red: 'text-red',
  yellow: 'text-yellow',
  green: 'text-green',
  gray: 'text-gray',
}

export const sampleMyHome = {
  id: 1039,
  address:
    '29100 Chualar Canyon Road, Chualar, California 93925, United States',
  bath: 8,
  beds: 8,
  price: 9000,
  sqft: 88,
  plan: 1,
  imgs: [
    'https://res.cloudinary.com/thankyou/image/upload/v1650536044/zillow-clone/p5zzsthjns9sujxcltrz.jpg',
  ],
  published: true,
}

export const randomNumber = ({ min = 0, max }: { min?: number; max: number }) =>
  Math.floor(Math.random() * (max - min + 1) + min)
