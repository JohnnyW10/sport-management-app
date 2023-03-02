import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import { useDispatch } from "react-redux";
import { createClub } from "../actions/club";

const RegisterContainer = styled.div`
  color: white;
  min-height: 100vh;
  background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);
`

const ContentContainer = styled.div`
  width: 50%;
  margin: 5% auto 0;
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
      display: block;
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

export default function RegisterClub() {
  const [newClub, setClub] = useState({
    name: '',
    login: '',
    password: '',
    clubID: '',
    adres: '',
  })

  const dispatch = useDispatch()

  const handleChange = (event) => {
    const {name, value } = event.target
    setClub((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const getNewUSer = (event) => {
    event.preventDefault()
    dispatch(createClub(newClub))
  }

  return (
    <RegisterContainer>
      <Navigation type={'Admin'}/>
      <ContentContainer>
        <h1>Rejestracja klubu</h1>
        <form onSubmit={getNewUSer}>
          <label>Nazwa Klubu: <input name='name' onChange={handleChange} type="text" required placeholder="Nazwa"/></label>
          <label>Login: <input name='login' onChange={handleChange} type="text" required placeholder="Login"/></label>
          <label>Hasło klubu: <input name='password' onChange={handleChange} type="password" required placeholder="Hasło"/></label>
          <label>ID klubu: <input name='clubID' onChange={handleChange} type="text" required placeholder="Kod klubu"/></label>
          <label>Adres: <input name='adres' onChange={handleChange} type="text" required placeholder="Adres"/></label>
          <button>Rejestracja</button>
        </form>
      </ContentContainer>
    </RegisterContainer>
  )
}