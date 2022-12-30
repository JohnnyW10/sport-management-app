import React from "react";
import styled from "styled-components";

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
    width: 100%;
  }
`

const Delete = styled.button`
  background-color: red;
  color: white;
  border-radius: 8px;
  border: black;
  margin: 10px;
`

const Edit = styled.button`
  background-color: green;
  color: white;
  border-radius: 8px;
  border: black;
  margin: 10px;
`

export default function Person({ user }) {
  return (
    <PersonInfoContainer>
      <p>{user.name}</p>
      <p>{user.surname}</p> 
      <p>{user.login}</p>
      <p>{user.role}</p>
      <p>{user.salary}</p>
      <p>{user.birthDate}</p>
      <Delete>Usuń</Delete>
      <Edit>Edit</Edit>
    </PersonInfoContainer>
  )
}