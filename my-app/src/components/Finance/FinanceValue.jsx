import React from "react";
import styled from "styled-components";

const Finance = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid white;
  justify-content: center;

  button {
    border-radius: 15px;
    cursor: pointer;
    color: white;
    border-radius: 8px;
    border: black;
    margin: 10px;
  }

`

const Delete = styled.button`
  background-color: red;

  &:hover {
    background-color: rgb(194, 47, 17);
  }
`

const Edit = styled.button`
  background-color: green;

  &:hover {
    background-color: rgb(12, 176, 40);
  }
`

export default function FinanceValue( {finance} ) {

  return (
    <Finance>
      <p>{finance.id}</p>
      <p>{finance.name}</p>
      <p>{finance.type}</p>
      <p>{finance.cost}</p>
      <p>{finance.describe}</p>
      <Edit>Edytuj</Edit>
      <Delete>Usuń</Delete>
    </Finance>
  )
}