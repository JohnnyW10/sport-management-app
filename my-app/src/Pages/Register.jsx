import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/users";

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

    select {
      width: 200px;
      text-align: center;
      margin: auto;
      display: block;
      border-radius: 10px;
      line-height: 1.2rem;
      margin-bottom: 20px;
    }

    button {
      padding: 5px 20px;
      border-radius: 10px;
      line-height: 1.2rem;
      cursor: pointer;
    }
  }
`

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    login: '',
    role: '',
    clubID: '',
    password: '',
    status: '',
    bankAccount: '',
    salary: '',
  })

  const dispatch = useDispatch()

  const handleChange = (event) => {
    giveID()
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
    console.log(user)
  }

  const users = useSelector((state) => state.users)

  const giveID = () => {
    if(users.length === 0 || users[users.length - 1].id === 0) {
      setUser({id: '1'})
    } else {
      setUser({id: users[users.length - 1].id + 1})
    }
  }

  return (
    <RegisterContainer>
      <Navigation type={'User'}/>
      <ContentContainer>
        <h1>Rejestracja</h1>
        <form onSubmit={getNewUSer}>
          <label>Imie: <input name='name' onChange={handleChange} type="text" required placeholder="Imie"/></label>
          <label>Nazwisko: <input name='surname' onChange={handleChange} type="text" required placeholder="Nazwisko"/></label>
          <label>Login: <input name='login' onChange={handleChange} type="text" required placeholder="Login"/></label>
          <label>Rola: <input name='role' onChange={handleChange} type="text" required placeholder="Rola"/></label>
          <label>Hasło: <input name='password' onChange={handleChange} type="password" required placeholder="Hasło"/></label>
          <label>Status: 
            <select name='status' onChange={handleChange}>
              <option>Aktywny</option>
              <option>Nieaktywny</option>
            </select>
          </label>
          <button>Rejestracja</button>
        </form>
      </ContentContainer>
    </RegisterContainer>
  )
}

//<label>Login: <input name='mail' onChange={handleChange} type="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="To musi być prawdy mail!" required placeholder="Mail"/></label>