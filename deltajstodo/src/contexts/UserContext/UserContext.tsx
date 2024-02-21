import { createContext } from 'react'
import { type User } from '../../utilities/models'

export const UserContext = createContext<User | null>(null)
