/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-extra-boolean-cast */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://185.8.174.74:8000',

  prepareHeaders: (headers) => {
    const token = cookies.get('accessToken')

    if (token !== null && token !== 'undefined') {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (
  args: any,
  api: any,
  extraOptions: any
): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions)

  if (!!result?.error) {
    if (result?.error?.status === 401) {
      console.log('sending refresh token')
      // send refresh token to get new access token
      const refreshResult: any = await baseQuery(
        {
          url: '/accounts/refresh/',
          method: 'POST',
          body: { refresh: localStorage.getItem('refreshToken') }
        },
        api,
        extraOptions
      )
      console.log(refreshResult)

      if (refreshResult?.data !== null) {
        const user = api.getState().auth.user

        // store the new token
        api.dispatch(
          setCredentials({ accessToken: refreshResult?.data?.access, user })
        )

        cookies.set('accessToken', refreshResult?.data?.access)
        // retry the original query with new access token
        result = await baseQuery(args, api, extraOptions)
      } else {
        api.dispatch(logOut())
      }
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['workspaces', 'project', 'board', 'task', 'profile'],
  endpoints: () => ({})
})
