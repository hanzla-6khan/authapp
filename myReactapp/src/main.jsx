import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='your api keys '>
        <UserProvider>
          <App />
        </UserProvider >
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
