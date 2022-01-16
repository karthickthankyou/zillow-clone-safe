export type CounterStatus = 'idle' | 'loading' | 'failed'

export type User = {
  uid: string | null
  displayName: string | null
}

export type SigninInfo = {
  email: string
  password: string
}
export type SignupInfo = SigninInfo & {
  displayName?: string
}

export type AsyncData<T> = {
  data: T
  fulfilled?: boolean
  loading?: boolean
  error?: boolean
}

export type AsyncUser = AsyncData<User>
