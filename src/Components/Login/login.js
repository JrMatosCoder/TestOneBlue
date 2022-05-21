import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import { UserContext } from '../../userContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if(login === true) return <Navigate to="/"/>
  return (
    <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='criar' element={<LoginCreate/>}/>
    </Routes>
  )
}

export default Login