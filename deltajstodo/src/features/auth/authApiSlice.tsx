/* eslint-disable spaced-comment */
import { apiSlice } from '../../app/api/apiSlice'
//every api here has the auth header if user login succesfully
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/accounts/login/',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: '/accounts/change-password/',
        method: 'PUT',
        body: { ...data }
      })
    }),
    getWorkspaces: builder.query({
      query: () => ({
        url: '/workspaces/',
        method: 'GET'
        // body: { ...data }
      })
    }),
    createWorkspaces: builder.mutation({
      query: (data:) => ({
        url: '/workspaces/',
        method: 'POST'
        // body: { ...data }
      })
    })
  })
})

export const { useLoginMutation, useGetWorkspacesQuery } = authApiSlice
