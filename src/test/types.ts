import { SchemaLookup } from '..'
import { NetcodeTypes } from '../binpack'

export type LoginRequest = {
  idToken: string
}

export const LoginRequestSchema = {
  idToken: NetcodeTypes.String,
}

export type Session = {
  uid: string
}
export const SessionSchema = {
  uid: NetcodeTypes.String,
}

export enum MessageTypes {
  Login = 1,
  Session = 2,
}
export const schemas: SchemaLookup = {
  [MessageTypes.Login]: LoginRequestSchema,
  [MessageTypes.Session]: SessionSchema,
}
