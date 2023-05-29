import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './global.jsx'
// @ts-ignore
import Global from "./global.jsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Global />
      <App />
  </React.StrictMode>,
)
