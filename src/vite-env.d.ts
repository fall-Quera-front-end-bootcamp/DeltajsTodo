/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_HTTP_URL?: string,
  readonly VITE_SERVER_WS_URL?: string,
  readonly NEXT_PUBLIC_USE_MOCKS?: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
