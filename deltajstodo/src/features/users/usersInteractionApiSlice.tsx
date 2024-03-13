/* eslint-disable spaced-comment */
import { apiSlice } from '../../app/api/apiSlice'

export const usersInteractionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/accounts/',
        method: 'Get'
        //body: { ...users }
      })
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/accounts/${id}`,
        method: 'Get'
      }),
      providesTags: ['profile']
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/accounts/',
        method: 'Post',
        body: { ...data }
      })
    }),

    forget: builder.mutation({
      query: (data) => ({
        url: '/accounts/reset-password/',
        method: 'POST',
        body: { ...data }
      })
    }),
    reset: builder.mutation({
      query: (data) => ({
        url: data.url,
        method: 'PATCH',
        body: { ...data.body }
      })
    })
  })
})

export const {
  useGetUsersQuery,
  useRegisterMutation,
  useForgetMutation,
  useResetMutation,
  useGetUserQuery
} = usersInteractionApiSlice
