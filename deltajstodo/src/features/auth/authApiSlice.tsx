/* eslint-disable spaced-comment */
import { apiSlice } from '../../app/api/apiSlice'
//every api here has the auth header if user login succesfully
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Autherization Functions
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

    // Workspaces Functions
    getWorkspaces: builder.query({
      query: () => ({
        url: '/workspaces/',
        method: 'GET'
      }),
      providesTags: ['workspaces']
    }),

    getWorkspace: builder.query({
      query: (id) => ({
        url: `/workspaces/${id}`,
        method: 'GET'
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

    editWorkspace: builder.mutation({
      query: ({ data, id }) => ({
        url: `/workspaces/${id}/`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    deleteWorkspace: builder.mutation({
      query: (id) => ({
        url: `/workspaces/${id}/`,
        method: 'Delete'
      }),
      invalidatesTags: ['workspaces']
    }),

    // Workspace Members
    getWorkspaceMembers: builder.query({
      query: (wrks_id) => ({
        url: `/workspaces/${wrks_id}/members`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    getWorkspaceMember: builder.query({
      query: ({ wrks_id, member_id }) => ({
        url: `/workspaces/${wrks_id}/members/${member_id}`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    addWorkspaceMember: builder.mutation({
      query: ({ data, wrks_id }) => ({
        url: `/workspaces/${wrks_id}/members`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    editWorkspaceMember: builder.mutation({
      query: ({ data, wrks_id, member_id }) => ({
        url: `/workspaces/${wrks_id}/members/${member_id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    deleteWorkspaceMember: builder.mutation({
      query: ({ wrks_id, member_id }) => ({
        url: `/workspaces/${wrks_id}/members/${member_id}`,
        method: 'Delete'
      }),
      invalidatesTags: ['workspaces']
    }),

    // Workspace Project Functions
    getWorkspaceProjects: builder.query({
      query: (wrks_id) => ({
        url: `/workspaces/${wrks_id}/projects`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    getWorkspaceProject: builder.query({
      query: ({ wrks_id, project_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    addWorkspaceProject: builder.mutation({
      query: ({ data, wrks_id }) => ({
        url: `/workspaces/${wrks_id}/projects`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    editWorkspaceProject: builder.mutation({
      query: ({ data, wrks_id, project_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    deleteWorkspaceProject: builder.mutation({
      query: ({ wrks_id, project_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}`,
        method: 'Delete'
      }),
      invalidatesTags: ['workspaces']
    }),

    // Project Boards
    getProjectBoards: builder.query({
      query: ({ wrks_id, project_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    getProjectBoard: builder.query({
      query: ({ wrks_id, project_id, board_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    addProjectBoard: builder.mutation({
      query: ({ data, wrks_id, project_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    editProjectBoard: builder.mutation({
      query: ({ data, wrks_id, project_id, board_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    deleteProjectBoard: builder.mutation({
      query: ({ wrks_id, project_id, board_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}`,
        method: 'Delete'
      }),
      invalidatesTags: ['workspaces']
    }),

    // Board Tasks
    getBoardTasks: builder.query({
      query: ({ wrks_id, project_id, board_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    getBoardTask: builder.query({
      query: ({ wrks_id, project_id, board_id, task_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    addBoardTask: builder.mutation({
      query: ({ data, wrks_id, project_id, board_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    editBoardTask: builder.mutation({
      query: ({ data, wrks_id, project_id, board_id, task_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    deleteBoardTask: builder.mutation({
      query: ({ wrks_id, project_id, board_id, task_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}`,
        method: 'Delete'
      }),
      invalidatesTags: ['workspaces']
    }),

    // Task members
    getTaskMembers: builder.query({
      query: ({ wrks_id, project_id, board_id, task_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/assignee`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    getTaskMember: builder.query({
      query: ({ wrks_id, project_id, board_id, task_id, member_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/assignee/${member_id}`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    addTaskMember: builder.mutation({
      query: ({ data, wrks_id, project_id, board_id, task_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/assignee`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    editTaskMember: builder.mutation({
      query: ({ data, wrks_id, project_id, board_id, task_id, member_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/assignee${member_id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    deleteTaskMember: builder.mutation({
      query: ({ wrks_id, project_id, board_id, task_id, member_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/assignee${member_id}`,
        method: 'Delete'
      }),
      invalidatesTags: ['workspaces']
    }),

    // Task comment
    getTaskComments: builder.query({
      query: ({ wrks_id, project_id, board_id, task_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    getTaskComment: builder.query({
      query: ({ wrks_id, project_id, board_id, task_id, comment_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments/${comment_id}`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    addTaskComment: builder.mutation({
      query: ({ data, wrks_id, project_id, board_id, task_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    editTaskComment: builder.mutation({
      query: ({
        data,
        wrks_id,
        project_id,
        board_id,
        task_id,
        comment_id
      }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments${comment_id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    deleteTaskComment: builder.mutation({
      query: ({ wrks_id, project_id, board_id, task_id, comment_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/comments${comment_id}`,
        method: 'Delete'
      }),
      invalidatesTags: ['workspaces']
    }),

    // Task Logs
    getTaskLogs: builder.query({
      query: ({ wrks_id, project_id, board_id, task_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/logs`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),
    getTaskLog: builder.query({
      query: ({ wrks_id, project_id, board_id, task_id, log_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/boards/${board_id}/tasks/${task_id}/logs/${log_id}`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    // Project Members
    getProjectMembers: builder.query({
      query: ({ wrks_id, project_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/members`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    getProjectMember: builder.query({
      query: ({ wrks_id, project_id, member_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/members/${member_id}`,
        method: 'Get'
      }),
      providesTags: ['workspaces']
    }),

    addProjectMember: builder.mutation({
      query: ({ data, wrks_id, project_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/members`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    editProjectMember: builder.mutation({
      query: ({ data, wrks_id, project_id, member_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/members/${member_id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),

    deleteProjectMember: builder.mutation({
      query: ({ wrks_id, project_id, member_id }) => ({
        url: `/workspaces/${wrks_id}/projects/${project_id}/members/${member_id}`,
        method: 'Delete'
      }),
      invalidatesTags: ['workspaces']
    }),

    // Subscription
    share: builder.mutation({
      query: ({ data }) => ({
        url: `/workspaces/subscription`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    shareLink: builder.mutation({
      query: ({ data }) => ({
        url: `/workspaces/subscription/copy`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    })
    // invitationToken: builder.query({
    //   query: () => ({
    //     url: `/workspaces/subscription/invitation`,
    //     method: 'Get'
    //   }),
    //   providesTags: ['workspaces']
    // }),
  })
})

export const {
  useShareMutation,
  useShareLinkMutation,

  useDeleteProjectMemberMutation,
  useEditProjectMemberMutation,
  useAddProjectMemberMutation,
  useGetProjectMemberQuery,
  useGetProjectMembersQuery,

  useGetTaskLogQuery,
  useGetTaskLogsQuery,

  useDeleteTaskCommentMutation,
  useEditTaskCommentMutation,
  useAddTaskCommentMutation,
  useGetTaskCommentQuery,
  useGetTaskCommentsQuery,

  useDeleteTaskMemberMutation,
  useEditTaskMemberMutation,
  useAddTaskMemberMutation,
  useGetTaskMemberQuery,
  useGetTaskMembersQuery,

  useDeleteBoardTaskMutation,
  useEditBoardTaskMutation,
  useAddBoardTaskMutation,
  useGetBoardTaskQuery,
  useGetBoardTasksQuery,

  useDeleteProjectBoardMutation,
  useEditProjectBoardMutation,
  useAddProjectBoardMutation,
  useGetProjectBoardQuery,
  useGetProjectBoardsQuery,

  useDeleteWorkspaceProjectMutation,
  useEditWorkspaceProjectMutation,
  useAddWorkspaceProjectMutation,
  useGetWorkspaceProjectQuery,
  useGetWorkspaceProjectsQuery,

  useDeleteWorkspaceMemberMutation,
  useEditWorkspaceMemberMutation,
  useAddWorkspaceMemberMutation,
  useGetWorkspaceMemberQuery,
  useGetWorkspaceMembersQuery,
  useDeleteWorkspaceMutation,
  useEditWorkspaceMutation,
  useGetWorkspaceQuery,
  useLoginMutation,
  useGetWorkspacesQuery,
  useCreateWorkspaceMutation
} = authApiSlice
