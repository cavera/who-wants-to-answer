import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.querySelector('#root')

ReactDOM.createRoot(root as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
