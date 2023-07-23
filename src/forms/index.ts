import { DefaultValues } from 'react-hook-form'
import { Style } from 'src/generated/graphql'
import { z } from 'zod'

export const formSchemaSignup = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
  rememberMe: z.boolean().optional(),
  isLandlord: z.boolean().optional(),
})

export type FormTypeSignup = z.infer<typeof formSchemaSignup>

export const formDefaultSignup: DefaultValues<FormTypeSignup> = {
  name: '',
  password: '',
  email: '',
}

export const formSchemaSignin = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.boolean().optional(),
})

export type FormTypeSignin = z.infer<typeof formSchemaSignin>

export const formDefaultSignin: DefaultValues<FormTypeSignin> = {
  password: '',
  email: '',
}

export const formSchemaNewHome = z
  .object({
    address: z.string(),
    bath: z.number().min(0).max(10000),
    plan: z.number().min(0).max(3),
    beds: z.number().min(0).max(10000),
    lotSize: z.number().min(0),
    price: z.number().min(0),
    sqft: z.number().min(0),
    city: z.string(),
    description: z.string(),
    facts: z.string().optional(),
    published: z.boolean(),
    features: z.string(),
    state: z.string(),
    style: z.nativeEnum(Style),
    yearBuilt: z.number().min(1500).max(2023),
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
    imgs: z.array(z.string()).min(1).max(8),
    zipcode: z.string(),
  })
  .required()

export type FormTypeNewHome = z.infer<typeof formSchemaNewHome>

export const formDefaultNewHome: DefaultValues<FormTypeNewHome> = {}

export const formSchemaAgent = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
})
export type FormTypeAgent = z.infer<typeof formSchemaAgent>

export const formDefaultAgent: DefaultValues<FormTypeAgent> = {}
