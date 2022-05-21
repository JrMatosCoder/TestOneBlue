import React from 'react'
import { Link } from 'react-router-dom';
import Input from '../Forms/Input/';
import Button from '../Forms/Button/'
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../userContext';

const LoginForm = () => {
const username = useForm();
const password = useForm();
const { userLogin, error, loading } = React.useContext(UserContext);

async function handleSubmite(event){
  event.preventDefault();
  if(username.validate() && password.validate()){
    userLogin(username.value,password.value);
  }
}

  return (
    <section className="container">
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmite}>
        <Input 
          label="Usuário"
          type="text" 
          name="name" 
          {...username}
        />
        <Input 
          label="Senha" 
          type="password" 
          name="password" 
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ):(
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
        <br/>
        <Link to="/login/criar">Cadastro</Link>
      </form>
    </section>
  )
}

export default LoginForm