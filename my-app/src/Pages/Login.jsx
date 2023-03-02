import React from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import {Link} from 'react-router-dom'

const LoginContainer = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
  background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);
`
const ContentContainer = styled.div`
  width: 40%;
  height: 50%;
  margin: 5% auto;
  border-radius: 15px;
  background: rgb(1, 63, 71);
  box-shadow: 10px 10px 5px rgb(1, 39, 44);
  border: 3px solid black;

  h1 {
    padding: 10px;
  }

  form {
    label {
      width: 40%;
      text-align: center;
      margin: auto;
      display: block;
      margin-bottom: 10px;
    }

    input {
      width: 45%;
      text-align: center;
      margin: auto;
      display: block;
      border-radius: 10px;
      line-height: 1.2rem;
      margin-bottom: 30px;
    }

    button {
      padding: 5px 20px;
      border-radius: 10px;
      line-height: 1.2rem;
      cursor: pointer;
    }
  }
`

export default function Login() {
  let isAdmin = true
  return (
    <LoginContainer>
      <Navigation type={'Home'}/>
      <ContentContainer>
        <h1>Logowanie</h1>
        <form>
          <label>Login: </label>
          <input type="text"/>
          <label>Hasło: </label>
          <input type="password"/>
          {isAdmin ? <Link to="/admin"><button>Zaloguj się</button></Link> : <Link to="/user"><button>Zaloguj się</button></Link>}
        </form>
      </ContentContainer>
    </LoginContainer>
  )
}