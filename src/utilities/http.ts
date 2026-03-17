const isAbsoluteUrl = (url: string) => /^https?:\/\//i.test(url)

const apiBase =
  (import.meta.env.NEXT_PUBLIC_API_BASE &&
    import.meta.env.NEXT_PUBLIC_API_BASE.trim()) ||
  '/api'

export const apiUrl = (path: string) => {
  if (isAbsoluteUrl(path)) return path
  const base = apiBase.replace(/\/+$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  if (base === '/api' && normalizedPath.startsWith('/api')) {
    return normalizedPath
  }
  return `${base}${normalizedPath}`
}

export const withCredentialsFetch = async (
  input: RequestInfo | string,
  init?: RequestInit
) => {
  const url = typeof input === 'string' ? apiUrl(input) : input
  const res = await fetch(url, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
    ...init
  })
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }
  return res
}
