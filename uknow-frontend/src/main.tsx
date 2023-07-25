import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { UknowTheme } from './themes/ThemeUknow.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ UknowTheme }>
      <CssBaseline />
      <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
