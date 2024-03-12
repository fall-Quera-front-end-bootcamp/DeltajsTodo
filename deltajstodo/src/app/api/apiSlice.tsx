/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-extra-boolean-cast */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://185.8.174.74:8000',

  prepareHeaders: (headers, { getState }: { getState: any }) => {
    const token = getState().auth.token
    if (token !== null) {
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
  // console.log('api', api)
  //console.log('args', args)
  //console.log('extraOptions', extraOptions)

  let result = await baseQuery(args, api, extraOptions)
  // console.log(result)
  // console.log(result?.error)

  if (!!result?.error) {
    if (result?.error?.status === 401) {
      console.log('sending refresh token')
      // send refresh token to get new access token
      const refreshResult = await baseQuery(
        {
          url: '/accounts/refresh/',
          method: 'POST',
          body: { refresh: result?.data?.refresh }
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
        // retry the original query with new access token
        result = await baseQuery(args, api, extraOptions)
      } else {
        api.dispatch(logOut())
      }
    }
  }

  // if (result?.error?.status === 403) {
  //   console.log('sending refresh token')
  //   // send refresh token to get new access token
  //   const refreshResult = await baseQuery('/refresh/', api, extraOptions)
  //   console.log(refreshResult)
  //   if (refreshResult?.data !== null) {
  //     const user = api.getState().auth.user
  //     // store the new token
  //     api.dispatch(setCredentials({ ...refreshResult.data, user }))
  //     // retry the original query with new access token
  //     result = await baseQuery(args, api, extraOptions)
  //   } else {
  //     api.dispatch(logOut())
  //   }
  // }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['workspaces', 'project', 'board', 'task'],
  endpoints: (builder) => ({})
})
