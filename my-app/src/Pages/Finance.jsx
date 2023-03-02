import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import FinanceValue from "../components/Finance/FinanceValue";
import { useDispatch, useSelector } from "react-redux";
import { getFinance, createFinance, editFinance } from "../actions/finance";


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
  border: 3px solid white;
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

    label {
      margin-self: center;
      justify-content: center;
      margin-right: 10px;
  
      select {
        width: 200px;
        text-align: center;
        border-radius: 10px;
        line-height: 1.2rem;
        padding: 5px;
        margin-left: 10px;
      }
    }
  }

  button {
    padding: 0 20px;
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


const ArrayOfFinance = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 3px solid white;
  border-top: 3px solid white;
  margin: 0 0 16px 0;s
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


export default function Finance() {
  const arrayHeader = ['Nazwa', 'Typ wydatków', 'Wartość', 'Opis', 'Data Zakończenia',  'Status', 'Edytuj', 'Usuń']
  let [isOpenPopUp, setOpenPopUp] = useState(false)
  let [isSelection, setSelection] = useState('')

  const [finance, setFinance] = useState({
    name: '',
    type: '',
    cost: 0,
    describe: '',
    endDate: '',
    status: '',
    clubID: '',
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFinance())
  }, [dispatch])

  const finans = useSelector((state) => state.finance)

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
    dispatch(createFinance(finance))
  }

  const select = (event) => {
    event.preventDefault()
    setSelection(isSelection = event.target.value)
  }

  const Income = () => {
    let result = 0
    finans.filter(el => el.type === 'Przychód').map(el => result += Number(el.cost))
    if(isSelection === 'Przychody' || isSelection === '' || isSelection === 'Inne' || isSelection === 'Aktywny' || isSelection === 'Nieaktywny') {
      return(<p>Suma Przychodów: {result} zł</p>)
    }
  }

  const Expenses = () => {
    let result = 0
    finans.filter(el => el.type === 'Wydatek').map(el => result += Number(el.cost))
    if(isSelection === 'Wydatek' || isSelection === '' || isSelection === 'Inne' || isSelection === 'Aktywny' || isSelection === 'Nieaktywny') {
      return(<p>Suma Wydatków: {result} zł</p>)
    }
  }

  const Balance = () => {
    let result = 0
    finans.map(el => result += Number(el.cost))
    return(<p>Balans: {result} zł</p>)
  }

  const Filter = () => {
    if (isSelection === 'Inne' || isSelection === '') {
      return (
        <>
          {finans.map((finance) => <FinanceValue finance={finance}/>)}
        </>
      )
    } else if(isSelection === 'Przychód' || isSelection === 'Wydatek' ) {
        return (
          <>
            {finans.filter(el => el.type === isSelection).map((finance) => <FinanceValue finance={finance}/>)}
          </>)
    } else if(isSelection === 'Aktywny' || isSelection === 'Nieaktywny') {
      return (
        <>
          {finans.filter(el => el.status === isSelection).map((finance) => <FinanceValue finance={finance}/>)}
        </>)
    } 
  }

  return(
    <FinanceContainer>
      <Navigation type={'User'}/>
      {isOpenPopUp ? (
        <PopUp>
          <Title><h3>Dodaj rekord do budżetu</h3><button onClick={() => setOpenPopUp(isOpenPopUp = false)}>X</button></Title>
          <form onSubmit={getNewFinance}>
            <label>Nazwa: <input type={'text'} onChange={handleChange} name={'name'}/></label>
            <label>
              Typ: 
              <select onChange={handleChange} defaultValue={'Wydatek'} required name={'type'}>
                <option value={'Wydatek'}>Wydatek</option>
                <option value={'Przychód'}>Przychód</option>
                <option value={'Inne'}>Inne</option>
              </select>
            </label>
            <label>Wartość: <input type={'number'} onChange={handleChange} required name={'cost'}/></label>
            <label>Opis: <input type={'text'} onChange={handleChange} required name={'describe'}/></label>
            <label>Data Zakończenia: <input type={'date'} onChange={handleChange} required name={'endDate'}/></label>
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
      <ContentContainer>
        <Budget>
          <Income />
          <Expenses />
          <Balance />
          <p>
          <label>
            Pokaż: 
            <select onChange={select} name={'filtr'}>
                <option value={'Wydatek'}>Wydatek</option>
                <option value={'Przychód'}>Przychód</option>
                <option value={'Aktywny'}>Aktywny</option>
                <option value={'Nieaktywny'}>Nieaktywny</option>
                <option value={'Inne'}>Inne</option>
            </select>
          </label>
          </p>
          <button onClick={() => setOpenPopUp(isOpenPopUp = true)}>+Dodaj</button>
        </Budget>
        <ArrayOfFinance>{arrayHeader.map(el => <p>{el}</p>)}</ArrayOfFinance>
        <Filter />
      </ContentContainer>
    </FinanceContainer>
  )
}