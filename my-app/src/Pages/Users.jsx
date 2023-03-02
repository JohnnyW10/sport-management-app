import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import Person from '../components/UsersArrayView/Person'
import { useDispatch } from "react-redux";
import { createUser } from "../actions/users";

const Container = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
  background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);
`

const ContentContainer = styled.div`
  width: 95%;
  min-height: 500px;
  margin: 5% auto;
  text-align: center;
  border-radius: 15px;
  background: rgb(1, 63, 71);
  box-shadow: 10px 10px 5px rgb(1, 39, 44);
  border: 3px solid black;

  h3 {
    text-align: center;
    display: block;
    width: 100%;

    button {
      border-radius: 8px;
      background-color: green;
      border: 1px solid white;
      color: white;
      padding: 5px 10px;
      margin-left: 15px;
    }
  }
`

const PersonInfoContainer = styled.div`
  display: grid;
  width: 100%;
  grid-auto-flow: column;  
  grid-auto-columns: 1fr;
  gap: 10px;
  border-bottom: 1px solid white;

  p {
    display: block;
    text-align: center;
  }
`

const PopUp = styled.div`
width: 450px;
min-height: 500px;
position: fixed; 
z-index: 1;
background: rgb(1, 63, 71);
border-radius: 8px;
border: 3px solid black;
margin: auto;
top: calc(50% - 300px);
left: calc(50% - 225px);

form {
  label {
    text-align: center;
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }

  input, select {
    width: 200px;
    text-align: center;
    margin: auto;
    display: block;
    border-radius: 10px;
    line-height: 1.2rem;
    margin-bottom: 20px;
  }

  select {
    padding: 5px;
  }

  button {
    padding: 5px 20px;
    border-radius: 10px;
    background: green;
    color: white;
    border: none;
    line-height: 1.2rem;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
      background: rgb(6, 156, 9);
    }
  }
}
`

const Title = styled.div`
  display: flex;
  justify-content: center;

  button {
    position: absolute;
    border-radius: 5px;
    border: 1px solid white;
    background: red;
    cursor: pointer;
    color: white;
    right: 5px;
    top: 5px;

    &:hover {
      background: rgb(156, 6, 6);
    }
  }
`



export default function UsersArrayView () {
  const users = useSelector((state) => state.users)
  let [isOpenPopUp, setPopUp] = useState(false)
  const [newUser, setNewUser] = useState({
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
    const {name, value } = event.target
    setNewUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const getNewUSer = (event) => {
    event.preventDefault()
    dispatch(createUser(newUser))
  }

  return (
    <Container>
      <Navigation type={'User'}/>
      {isOpenPopUp ? (
        <PopUp>
          <form onSubmit={getNewUSer}>
          <Title><h3>Edytuj Pracownika</h3><button onClick={() => setPopUp(isOpenPopUp = false)}>X</button></Title>
          <label>Imie: <input name='name' onChange={handleChange} type="text" required placeholder={'Imie'} /></label>
          <label>Nazwisko: <input name='surname' onChange={handleChange} type="text" required placeholder={'Nazwisko'}/></label>
          <label>Login: <input name='login' onChange={handleChange} type="text" required placeholder={'Login'}/></label>
          <label>Rola: <input name='role' onChange={handleChange} type="text" required placeholder={'Rola'}/></label>
          <label>Hasło: <input name='password' onChange={handleChange} type="password" required placeholder={'Hasło'}/></label>
          <label>Wypłata: <input name='salary' onChange={handleChange} type="number" required placeholder={'Dodaj wypłate'} /></label>
          <label>Konto bankowe: <input name='bankAccount' onChange={handleChange} type="text" required placeholder={'Dodaj konto bankowe'}/></label>
          <label>Status: 
            <select name='status' onChange={handleChange}>
              <option value={'Aktywny'}>Aktywny</option>
              <option value={'Nieaktywny'}>Nieaktywny</option>
            </select>
          </label>
          <button>Dodaj pracownika</button>
          </form>
        </PopUp>) : ''}
      <ContentContainer>
        <h3>Pracownicy<button onClick={() => setPopUp(true)}>Dodaj pracownika</button></h3>
        <div>
          <PersonInfoContainer>
            <p>Imie:</p>
            <p>Nazwisko:</p>
            <p>Login:</p>
            <p>Rola: </p>
            <p>Wypłata: </p>
            <p>Numer konta: </p>
            <p>Status </p>
            <p>Usuń:</p>
            <p>Edytuj: </p>
          </PersonInfoContainer>
          {users.map((user) => <Person key={user._id} user={user}/>)}
        </div>
      </ContentContainer>
    </Container>
  )
}