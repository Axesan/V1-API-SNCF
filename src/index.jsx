import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* Mes routes qui seront définis dans le fichier 'App.jsx' */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
