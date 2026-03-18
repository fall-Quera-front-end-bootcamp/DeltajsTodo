// مغز سیستم /lib/api.ts
import axios from 'axios'

const API_BASE = (import.meta.env.VITE_SERVER_HTTP_URL || '/api').replace(
  /\/+$/,
  ''
)

export const WS_BASE = (import.meta.env.VITE_SERVER_WS_URL || '').replace(
  /\/+$/,
  ''
)

export const USE_MOCKS = import.meta.env.VITE_PUBLIC_USE_MOCKS === 'true'

export const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  withCredentials: true
})

let isRefreshing = false
let queue: (() => void)[] = []

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config

    // i find bug that the isLoading in useMe() hooks in authProvider,
    //  is true always so can navigate in pages or routes so,
    //  i dig every where what is problem i get here
    // this is what loop of it looks like
    //====================

    //  GET /users/me
    //  → 401

    //   interceptor
    //  → POST /auth/refresh

    //   /auth/refresh
    //  → 401 (for example if refresh cookie missing)

    //  interceptor runs AGAIN
    //  → tries /auth/refresh again
    //  → infinite loop

    //====================
    // do not refresh if:
    // - not 401
    // - already retried
    // - refresh endpoint itself
    if (
      error.response?.status !== 401 ||
      original._retry ||
      original.url === '/auth/refresh'
    ) {
      return Promise.reject(error)
    }

    original._retry = true

    if (isRefreshing) {
      return new Promise((resolve) => {
        queue.push(() => resolve(api(original)))
      })
    }

    isRefreshing = true

    try {
      await api.post('/auth/refresh')

      queue.forEach((cb) => cb())
      queue = []

      return api(original)
    } catch (err) {
      queue = []
      return Promise.reject(err)
    } finally {
      isRefreshing = false
    }
  }
)

export const apiUrl = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${API_BASE || ''}${normalized}`
}

export type ApiListResponse<T> = {
  data: T[]
  total?: number
}

export type ApiItemResponse<T> = {
  data: T
}
