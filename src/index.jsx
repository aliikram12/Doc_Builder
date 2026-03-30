import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// Create root with React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // StrictMode is enabled in development for better debugging
  // It will be disabled in production via Vite's config
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
