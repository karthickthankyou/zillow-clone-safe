export const getQueryParam = (
  searchParam: string | string[] | undefined,
  defaultValue?: string
) => {
  if (!searchParam) return defaultValue
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
