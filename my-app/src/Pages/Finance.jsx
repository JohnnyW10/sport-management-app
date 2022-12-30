import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import FinanceValue from "../components/Finance/FinanceValue";

const FinanceContainer = styled.div`
  color: white;
  min-height: 100vh;
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
`

const Budget = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 0;
  justify-content: center;

  p {
    min-width: 200px;
    margin-self: center;
    margin-left: 24px;
  }

  button {
    padding: 0 15px;
    border: 1px solid black;
    border-radius: 8px;
    background-color: rgb(164, 191, 171);
    color: white;
    cursor: pointer;

    &:hover {
      background-color: rgb(149, 166, 153);
    }
  }
`

const SumaP = styled.p`
  color: green;
`

const SumaW = styled.p`
  color: red;
`

const Wynik = styled.p`
  color: blue;
`

const ArrayOfFinance = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 3px solid white;
  border-top: 3px solid white;
  margin: 0 0 16px 0;s
`

const PopUp = styled.div`
  width: 450px;
  height: 400px;
  position: fixed; 
  z-index: 1;
  background: rgb(1, 63, 71);
  border-radius: 8px;
  border: 3px solid black;
  margin: auto;
  top: calc(50% - 200px);
  left: calc(50% - 225px);

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
    }

    button {
      padding: 5px 20px;
      border-radius: 10px;
      background: green;
      color: white;
      border: none;
      line-height: 1.2rem;
      cursor: pointer;

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


export default function Finance() {
  const expense = 15000
  const arrayHeader = ['ID', 'Nazwa', 'Typ wydatków', 'Wartość', 'Opis', 'Edytuj', 'Usuń']
  let [isOpenPopUp, setOpenPopUp] = useState(false)
  let financeObject = [
    {
      id: 1,
      name: 'Rachunki',
      type: 'Wydatek',
      cost: 100,
      describe: 'opis',
    },

    {
      id: 2,
      name: 'Bilety',
      type: 'Przychód',
      cost: 300,
      describe: 'opis',
    },

    {
      id: 3,
      name: 'Piasek na boisko',
      type: 'Wydatek',
      cost: 200,
      describe: 'opis',
    }
  ]

  const [finance, setFinance] = useState({
    id: 0,
    name: '',
    type: '',
    cost: 0,
    describe: '',
  })

  const handleChange = (event) => {
    const {name, value } = event.target
    setFinance((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const getNewFinance = (event) => {
    event.preventDefault()
    console.log(finance)
  }

  return(
    <FinanceContainer>
      <Navigation/>
      {isOpenPopUp ? (
        <PopUp>
          <Title><h3>Dodaj rekord do budżetu</h3><button onClick={() => setOpenPopUp(isOpenPopUp = false)}>X</button></Title>
          <form onSubmit={getNewFinance}>
            <label>ID: <input type={'text'} onChange={handleChange} name={'id'}/></label>
            <label>Nazwa: <input type={'text'} onChange={handleChange} name={'name'}/></label>
            <label>Typ: <input type={'text'} onChange={handleChange} name={'type'}/></label>
            <label>Wartość: <input type={'number'} onChange={handleChange} name={'cost'}/></label>
            <label>Opis: <input type={'text'} onChange={handleChange} name={'describe'}/></label>
            <button>Dodaj</button>
          </form>
        </PopUp>) : ''}
      <ContentContainer>
        <Budget><p>Finanse: </p> <SumaP>Suma Przychodów: {expense} zł</SumaP><SumaW>Suma wydatków: {expense} zł</SumaW><Wynik>Balans: {expense} zł</Wynik><button onClick={() => setOpenPopUp(isOpenPopUp = true)}>+Dodaj</button></Budget>
        <ArrayOfFinance>{arrayHeader.map(el => <p>{el}</p>)}</ArrayOfFinance>
        {financeObject.map((finance) => <FinanceValue finance={finance}/>)}
      </ContentContainer>
    </FinanceContainer>
  )
}