export const getQueryParam = (
  searchParam: string | string[] | undefined,
  defaultValue: string
) => {
  if (!searchParam) return defaultValue
  return Array.isArray(searchParam) ? searchParam[0] : searchParam
}
