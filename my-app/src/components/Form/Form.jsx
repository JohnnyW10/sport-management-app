import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from '../../components/Navigation/Navigation';
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/users";

const RegisterContainer = styled.div`
color: white;
width: 100%;
background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);
`

const ContentContainer = styled.div`
width: 50%;
margin: 1% auto 0;
padding-bottom: 2rem;
border-radius: 15px;
background: rgb(1, 63, 71);
box-shadow: 10px 10px 5px rgb(1, 39, 44);
border: 3px solid black;

h1 {
  padding: 10px;
}

form {
  label {
    text-align: center;
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 200px;
    text-align: center;
    margin: auto;
    border-radius: 10px;
    line-height: 1.2rem;
    margin-bottom: 20px;

    &:invalid {
      color: red;
    }
    &:invalid+b+[type="submit"] {
      display: none; /* hide input submit untill pattern matches */
    }
  }

  button {
    padding: 5px 20px;
    border-radius: 10px;
    line-height: 1.2rem;
    cursor: pointer;
  }
}
`

export default function Form() {
const [user, setUser] = useState({
  name: '',
  surname: '',
  login: '',
  role: '',
  id: 0,
  password: '',
  birthDate: '',
  salary: 0,
})

const dispatch = useDispatch()

const handleChange = (event) => {
  const {name, value } = event.target
  setUser((prevState) => {
    return {
      ...prevState,
      [name]: value,
    };
  }); 
}

const getNewUSer = (event) => {
  event.preventDefault()
  dispatch(createUser(user))
}

return (
  <RegisterContainer>
    <Navigation />
    <ContentContainer>
      <h1>Dodaj Pracownika</h1>
      <form onSubmit={getNewUSer}>
        <label>Imie: <input name='name' onChange={handleChange} type="text" required placeholder="Imie"/></label>
        <label>Nazwisko: <input name='surname' onChange={handleChange} type="text" required placeholder="Nazwisko"/></label>
        <label>Login: <input name='login' onChange={handleChange} type="text" required placeholder="Login"/></label>
        <label>Rola: <input name='role' onChange={handleChange} type="text" required placeholder="Rola"/></label>
        <label>Id: <input name='id' onChange={handleChange} type="number" required placeholder="id"/></label>
        <label>Hasło: <input name='password' onChange={handleChange} type="password" required placeholder="Hasło"/></label>
        <label>Data urodzenia: <input name='birthDate' onChange={handleChange} type="text" required placeholder="birthDate"/></label>
        <label>Wypłata: <input name='salary' onChange={handleChange} type="number" required placeholder="salary"/></label>
        <button>Rejestracja</button>
      </form>
    </ContentContainer>
  </RegisterContainer>
)
}


