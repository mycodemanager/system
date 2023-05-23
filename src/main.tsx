import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRender from './App.tsx'
import './index.css'
import "./i18n/index.ts"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
    <AppRender />
  </React.Fragment>,
)
