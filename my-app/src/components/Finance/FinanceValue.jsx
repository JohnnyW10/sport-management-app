import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteFinance, editFinance } from "../../actions/finance";

const Finance = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid ${props => props.primary ? 'rgb(255, 255, 255, 0.4)' : 'white'};
  color: ${props => props.primary ? 'rgb(255, 255, 255, 0.4)' : 'white'};
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
  background:${props => props.primary ? 'rgb(255, 255, 255, 0.4)' : 'black'} !important;
  color: ${props => props.primary ? 'black' : 'white'} !important;
`

const Edit = styled.button`
  background:${props => props.primary ? 'rgb(255, 255, 255, 0.4)' : 'green'} !important;
  color: ${props => props.primary ? 'black' : 'white'} !important;
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


export default function FinanceValue( {finance} ) {
  let [isOpenPopUp, setOpenPopUp] = useState(false)
  let [financeID, setFinanceId] = useState(false)
  

  const [editFinanceObject, setFinance] = useState({
    name: '',
    type: '',
    cost: 0,
    describe: '',
    endDate: '',
    status: '',
  })

  const dispatch = useDispatch()

  const handleChange = (event) => {
    const {name, value } = event.target
    setFinance((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const editFinanceFunction = (event) => {
    event.preventDefault()
    dispatch(editFinance(financeID, editFinanceObject))
  }

  const changeStatus = () => {
    if(finance.status === 'Nieaktywny') {
      dispatch(editFinance(finance._id, {status: 'Aktywny'}))
    } else if (finance.status === 'Aktywny') {
      dispatch(editFinance(finance._id, {status: 'Nieaktywny'}))
    }
  }

  const edit = (id) => {
    setOpenPopUp(!isOpenPopUp)
    setFinanceId(id)
  }

  return (
    <Finance primary={finance.status === 'Nieaktywny' ? true : false} key={finance._id}>
       {isOpenPopUp ? (
       <PopUp>
          <Title><h3>Dodaj rekord do budżetu</h3><button onClick={() => setOpenPopUp(isOpenPopUp = false)}>X</button></Title>
          <form onSubmit={editFinanceFunction}>
            <label>Nazwa: <input type={'text'} onChange={handleChange} name={'name'} placeholder={finance.name}/></label>
            <label>
              Typ: 
              <select onChange={handleChange} defaultValue={'Wydatek'} required placeholder={finance.type} name={'type'}>
                <option value={'Wydatek'}>Wydatek</option>
                <option value={'Przychód'}>Przychód</option>
                <option value={'Inne'}>Inne</option>
              </select>
            </label>
            <label>Wartość: <input type={'number'} onChange={handleChange} required name={'cost'} placeholder={finance.cost}/></label>
            <label>Opis: <input type={'text'} onChange={handleChange} required name={'describe'} placeholder={finance.describe}/></label>
            <label>Data Zakończenia: <input type={'date'} onChange={handleChange} required name={'endDate'} placeholder={finance.endDate}/></label>
            <label>                                                                                                                                                                                                                                             
              Status
              <select onChange={handleChange} required name={'status'}>
                <option>Status</option>
                <option value={'Aktywny'}>Aktywny</option>
                <option value={'Nieaktywny'}>Nieaktywny</option>
              </select>
            </label>
            <button>Dodaj</button>
          </form>
        </PopUp>) : ''}
      <p>{finance.name}</p>
      <p>{finance.type}</p>
      <p>{finance.cost}</p>
      <p>{finance.describe}</p>
      <p>{finance.endDate}</p>
      <p>{finance.status}</p>
      <Edit onClick={() => edit(finance._id)} primary={finance.status === 'Nieaktywny' ? true : false}>Edytuj</Edit>
      <Delete onClick={() => changeStatus()} primary={finance.status === 'Nieaktywny' ? true : false}>Zmień status</Delete>
    </Finance>
  )
}