export const getQueryParam = (
  searchParam: string | string[] | undefined,
  defaultValue: string
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
