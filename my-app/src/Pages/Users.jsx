import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import Person from '../components/UsersArrayView/Person'
import Form from '../components/Form/Form'
import { useState } from "react";

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
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgb(0, 0, 0, 0.7);
`

export default function UsersArrayView () {
  const users = useSelector((state) => state.users)
  let [openRegister, setOpenRegister] = useState(() => false)

  return (
    <Container>
      {openRegister ? (
          <PopUp>
            <Form />
          </PopUp>
        ) : ''}
      <Navigation />
      <ContentContainer>
        <h3>Pracownicy <button onClick={() => setOpenRegister(openRegister = !openRegister)}>+Dodaj</button></h3>
        <div>
          <PersonInfoContainer>
            <p>Imie:</p>
            <p>Nazwisko:</p>
            <p>Login:</p>
            <p>Rola: </p>
            <p>Wypłata: </p>
            <p>Data urodzenia: </p>
            <p>ID: </p>
            <p>Usuń:</p>
          </PersonInfoContainer>
          {users.map((user) => <Person user={user}/>)}
        </div>
      </ContentContainer>
    </Container>
  )
}