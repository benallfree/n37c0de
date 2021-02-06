import { SchemaLookup } from '..'
import { Binpacker } from '../binpack'

export type LoginRequest = {
  idToken: string
}

export const LoginRequestSchema = {
  idToken: Binpacker.String,
}

export type Session = {
  uid: string
}
export const SessionSchema = {
  uid: Binpacker.String,
}

export const LOGIN = 1
export const SESSION = 2
export const schemas: SchemaLookup = {
  [LOGIN]: LoginRequestSchema,
  [SESSION]: SessionSchema,
}
