/* eslint-disable spaced-comment */
import { apiSlice } from '../../app/api/apiSlice'

export const usersInteractionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/accounts',
        method: 'Get'
      })
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/accounts/${id}`,
        method: 'Get'
      }),
      providesTags: ['profile']
    }),
    updateInfo: builder.mutation({
      query: (data) => ({
        url: `/accounts/${data.id}/`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['profile']
    }),
    getSettings: builder.query({
      query: () => ({
        url: '/settings/',
        method: 'Get'
      })
    }),
    setSettings: builder.mutation({
      query: (data) => ({
        url: '/settings/',
        method: 'POST',
        body: { ...data }
      })
    }),
    updatePass: builder.mutation({
      query: (data) => ({
        url: '/accounts/change-password/',
        method: 'PUT',
        body: { ...data }
      })
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
  useUpdatePassMutation,
  useUpdateInfoMutation,
  useGetSettingsQuery,
  useSetSettingsMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useRegisterMutation,
  useForgetMutation,
  useResetMutation
} = usersInteractionApiSlice
