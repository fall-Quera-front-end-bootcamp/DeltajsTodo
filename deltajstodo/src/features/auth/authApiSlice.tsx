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
      }),
      providesTags: ['workspaces']
    }),
    createWorkspace: builder.mutation({
      query: (data) => ({
        url: '/workspaces/',
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    getWorkspace: builder.query({
      query: (id) => ({
        url: `/workspaces/${id}/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['workspaces']
    }),
    updataWorkspace: builder.mutation({
      query: (data) => ({
        url: `workspaces/${data.id}/`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    deleteWorkspace: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.id}/`,
        method: 'Delete'
        //body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    getWorkspaceMembers: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/members/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['workspaces']
    }),
    createWorkspaceMember: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/members/`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    getWorkspaceMember: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/members/${data.id}`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['workspaces']
    }),
    updataWorkspaceMember: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/members/${data.id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    deleteWorkspaceMember: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/members/${data.id}`,
        method: 'DELETE'
        // body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    /////////////////////////////////////////////////////////
    getProjects: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['project', 'board', 'task']
    }),
    createProject: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['project', 'board', 'task']
    }),
    getProject: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.id}/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['project', 'board', 'task']
    }),
    updataProject: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.id}/`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['project', 'board', 'task']
    }),
    deleteProject: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.id}/`,
        method: 'Delete'
        //body: { ...data }
      }),
      invalidatesTags: ['board', 'task']
    }),
    //////////////////////////////////////////////////////////////
    getBoards: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['board', 'task']
    }),
    createBoard: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['board', 'task']
    }),
    getBoard: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.id}/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['board', 'task']
    }),
    updataBoard: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.id}/`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['board', 'task']
    }),
    deleteBoard: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.id}/`,
        method: 'Delete'
        //body: { ...data }
      }),
      invalidatesTags: ['board', 'task']
    }),
    /////////////////////////////////////////////////////
    getTasks: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['task']
    }),
    createTask: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['task']
    }),
    getTask: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/${data.id}`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['task']
    }),
    updataTask: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/${data.id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['task']
    }),
    deleteTask: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/${data.id}`,
        method: 'Delete'
        //body: { ...data }
      }),
      invalidatesTags: ['task']
    })
  })
})

export const {
  useLoginMutation,
  useGetWorkspacesQuery,
  useCreateWorkspaceMutation,
  useUpdataWorkspaceMutation,
  useDeleteWorkspaceMutation,
  /////////////////////////////////////
  useGetProjectsQuery,
  useCreateProjectMutation,
  useGetProjectQuery,
  useUpdataProjectMutation,
  useDeleteProjectMutation,
  ///////////////////////////////////
  useGetBoardsQuery,
  useCreateBoardMutation,
  useGetBoardQuery,
  useUpdataBoardMutation,
  useDeleteBoardMutation,
  /////////////////////////////
  useCreateTaskMutation
} = authApiSlice
