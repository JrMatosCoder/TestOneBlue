import React from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';
import Button from '../Components/Forms/Button/'

const Home = () => {
  const { login, data, userLogout } = React.useContext(UserContext);

  return (
    <section className='container'>
      {login ? (
        <h1>Olá {data} seja bem vindo! <Button onClick={userLogout}>Deslogar</Button></h1>
      ):(
        <h1>Olá faça login em nosso site <Link to="/login">Login</Link></h1>
      )}
    </section>
  )
}

export default Home