
// import Header from '../Header'

import { Auth } from './pages/Auth';
import Chats from './pages/Chats';
import Login from './pages/Login'
import Signup from './pages/Signup';
import { Route, Routes } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Auth />} />
        <Route path='/chats' element={<Signup />} />
        <Route path='/chats/:id' element={<Chats />} />
      </Routes>
    </>
  )
}

export default App
