import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Components/Login/login';
import { UserStorage } from './userContext';

function App() {
  return (
    <BrowserRouter>
        <UserStorage>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login/*' element={<Login/>}/>
            </Routes>
        </UserStorage>
    </BrowserRouter>
  );
}

export default App;
