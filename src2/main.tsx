import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './dist/output.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store.tsx'
import { Provider } from 'react-redux'
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
