/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice } from '@reduxjs/toolkit'

type SliceState = {
  user: null | {
    access: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    refresh: string
    thumbnail: string
    user_id: number
    username: string
  }
  token: null | string
  resetURL: null | string
}

const initialState: SliceState = { user: null, token: null, resetURL: null }

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload
      state.user = user
      state.token = accessToken
    },
    logOut: (state) => {
      state.user = null
      state.token = null
    },
    setResetURL: (state, action) => {
      const { resetURL } = action.payload
      state.resetURL = resetURL
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: any) => state?.auth?.user
export const selectCurrentToken = (state: any) => state.auth.token
