/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice } from '@reduxjs/toolkit'
//import {Users} from '../../utilities/models'
const usersInteractionSlice = createSlice({
  name: 'usersInteractions',
  initialState: { users: null, id: null },
  reducers: {
    setUserId: (state, action) => {
      const { id } = action.payload
      state.id = id
    },
    setUsers: (state, action) => {
      const { users } = action.payload
      state.users = users
    }
  }
})

export const { setUsers, setUserId } = usersInteractionSlice.actions

export default usersInteractionSlice.reducer

export const selecttUsers = (state: any) => state?.auth?.users
