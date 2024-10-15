import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='531916983718-pm93e2josvnrmd2jmqjqdcp4mbuulqrf.apps.googleusercontent.com'>
        <UserProvider>
          <App />
        </UserProvider >
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
