import React from 'react'
import { USER_LOGIN, USER_REGISTER } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const userLogout = React.useCallback(async function(){
    setData(null);
    setError(false);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('logado');
    window.localStorage.removeItem('name');
    navigate('/login')
  },[navigate])

  async function userLogin(username, password){
    try{
        setError(null);
        setLoading(true);
        const { url, options } = USER_LOGIN({name:username,password:password});
        const Res = await fetch(url, options);
        if(!Res.ok) throw new Error(`Error: ${Res.statusText}`)
        //pode usar com token
        window.localStorage.setItem('logado', true);
        window.localStorage.setItem('name', username);
        setData(username);
        navigate('/')
    }catch(err){
        setError(err.message);
        setLogin(false);
    }finally{
        setLoading(false);
    }
  }

  async function userRegister(username, password){
    try{
        setError(null);
        setLoading(true);
        const { url, options } = USER_REGISTER({name:username,password:password});
        const Res = await fetch(url, options);
        if(!Res.ok) throw new Error(`Error: ${Res.statusText}`)
        navigate('/login')
    }catch(err){
        setError(err.message);
        setLogin(false);
    }finally{
        setLoading(false);
    }
  }

  React.useEffect(()=>{
    function autoLogin(){
      const verifyLogin = window.localStorage.getItem('logado');
      const username = window.localStorage.getItem('name');
      if(verifyLogin){
        setLogin(true);
        setData(username);
      }
    }
    autoLogin()
  },[navigate])

  return (
    <UserContext.Provider value={{userLogin, data, userRegister, userLogout, error, loading, login}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContext