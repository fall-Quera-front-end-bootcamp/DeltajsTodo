/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react'
import { type User } from '../utilities/models'

export const UserContext = createContext<User | null>(null)

export const UserDispatchContext = createContext<unknown>(null)
