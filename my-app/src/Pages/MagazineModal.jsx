import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import { useDispatch, useSelector } from "react-redux";
import { getMagazine, createMagazine } from "../actions/magazine";
import Item from '../components/MagazineModal/Item'

const MagazineModalContainer = styled.div`
  color: white;
  padding-bottom: 2rem;
  background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);

  h3 {
    button {
      background: rgb(1, 63, 71);
      border-radius: 8px;
      margin: 5px 10px;
      color: white;
      border: 1px solid white;
    }
  }
`

const Container = styled.div`
  width: 90%;
  min-height: 80vh;
  margin: 20px auto 2rem auto;
`

const ItemsContainer = styled.div`
  width: 100%;
  min-height: 600px;
  background-color: rgb(1, 63, 71);
  margin: 20px auto;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 10px 10px 5px rgb(1, 39, 44);
  position: relative;

  button {
    border-radius: 50%;
    border: 1px solid white;
    margin-left: 10px;
    background-color: rgb(1, 63, 71);
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    color: white;
  }

  p {
    font-size: 1rem;
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
`

const ArrayOfMagazine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 3px solid white;
  margin: 0 0 16px 0;s
`

const CostSummary = styled.div`
  background: rgb(1, 63, 71);
  border: 1px solid white;
  border-radius: 8px;
  text-align: left;
  vertical-align: middle;
  padding: 1rem;
  width: calc(100% - 2rem);
  min-height: calc(50px - 2rem);
  color: white;
  border-top: 1px solid white;
`

const PopUpContainer = styled.div`
  width: 450px;
  min-height: 200px;
  position: fixed; 
  z-index: 1;
  background: rgb(1, 63, 71);
  border-radius: 8px;
  border: 3px solid black;
  margin: auto;
  top: calc(50% - 320px);
  left: calc(50% - 225px);

  form {
    select, option {
      width: 200px;
      text-align: center;
      margin: auto;
      border-radius: 10px;
      line-height: 1.2rem;
      margin-bottom: 20px;
      padding: 5px;
    }

    select {
      display: block;
    }

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


export default function MagazineModule() {
  let cost = 0
  const [newMagazine, setMagazine] = useState({
    name: '',
    id: '',
    number: '',
    clubID: '',
    status: '',
    type: '',
    person: '',
    dateToreturn: '',
    cost: '',
    isBuy: false,
  })
  let [isOpenPopUp, setOpenPopUp] = useState(() => false)
  const arrayHeader = ['Nazwa', 'Ilość', 'Status', 'Typ', 'Osoba wypożyczająca', 'Data do zwrotu', 'Kupione', 'Koszt', 'Edytuj', 'Zmień status']
  let [isSelection, setSelection] = useState('')
  //I need function which move things to buy to the items column

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMagazine())
  }, [dispatch])

  const allMagazine = useSelector((state) => state.magazine)

  const handleChange = (event) => {
    const {name, value } = event.target
    setMagazine((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const select = (event) => {
    event.preventDefault()
    setSelection(isSelection = event.target.value)
  }

  const getNewMagazine = (event) => {
    event.preventDefault()
    dispatch(createMagazine(newMagazine))
  }
  const summaryCost = allMagazine.filter(el => el.isBuy === false).map(el => {
    return cost += Number(el.cost)
  })

  const Filter = () => {
    if (isSelection === 'Wszystko' || isSelection === '') {
      return (
        <>
          {allMagazine.map((el) => <Item key={el._id} item={el}/>)}
        </>
      )
    } else if(isSelection === 'Kupione') {
        return (
          <>
            {allMagazine.filter(el => el.isBuy === true).map((element) => <Item key={element._id} item={element}/>)}
          </>)
    } else if(isSelection === 'Do zakupu') {
      return (
        <>
          {allMagazine.filter(el => el.isBuy === false).map((element) => <Item key={element._id} item={element}/>)}
        </>)
    } else if(isSelection === 'Wypożyczony') {
      return (
        <>
          {allMagazine.filter(el => el.status === isSelection).map((element) => <Item key={element._id} item={element}/>)}
        </>)
    } else if(isSelection === 'W magazynie') {
      return (
        <>
          {allMagazine.filter(el => el.status === isSelection).map((element) => <Item key={element._id} item={element}/>)}
        </>)
    } 
  }


  return(
    <MagazineModalContainer>
      <Navigation type={'User'}/>
      <h3>Magazyn<button onClick={() => setOpenPopUp(isOpenPopUp = !isOpenPopUp)}>Dodaj+</button>
        <label>
          Pokaż: 
          <select onChange={select} name={'filtr'}>
            <option value={'Wszystko'}>Wszystko</option>
            <option value={'W magazynie'}>W magazynie</option>
            <option value={'Kupione'}>Kupione</option>
            <option value={'Do zakupu'}>Do zakupu</option>
            <option value={'Wypożyczony'}>Wypożyczony</option>
          </select>
        </label>
      </h3>
      <Container>
      {isOpenPopUp ? (
        <PopUpContainer>
          <Title><h3>Dodaj przedmiot</h3><button onClick={() => setOpenPopUp(isOpenPopUp = false)}>X</button></Title>
           <form onSubmit={getNewMagazine}>
             <label>Nazwa: <input type="text" onChange={handleChange} name="name"/></label>
             <label>Ilość: <input type="number" onChange={handleChange} name="number"/></label>
             <label>Koszt: <input type="number" onChange={handleChange} name="cost"/></label>
             {newMagazine.isBuy ? (
              <label> 
                Status wypożyczenia: 
                <select onChange={handleChange} name="status">
                  <option value="Status wypożyczenia">Status wypożyczenia</option>
                  <option value="Wypożyczony">Wypożyczony</option>
                  <option value="W magazynie">W magazynie</option>
                </select>
              </label>
             ) : ''}
            <label> 
                Status zakupu: 
               <select onChange={handleChange} name="isBuy">
               <option>Status zakupu</option>
                 <option value={true}>Kupiony</option>
                 <option value={false}>Do zakupu</option>
               </select>
            </label>
            {newMagazine.status === 'Wypożyczony' ? (<>
              <label>Data zwrotu: <input type="date" onChange={handleChange} name="dateToreturn"/></label>
              <label>Osboa wypożyczająca: <input type="text" onChange={handleChange} name="person"/></label>
            </>) : ''}
             <label>
               Typ: 
               <select onChange={handleChange} name="type">
               <option value="Typ">Typ</option>
                 <option value="Sprzęt sportowy">Sprzęt sportowy</option>
                 <option value="Sprzęt">Sprzęt</option>
                 <option value="Inne">Inne</option>
                 <option value="Akcesoria">Akcesoria</option>
               </select>
             </label>
             <button>Dodaj</button>
           </form>
        </PopUpContainer>
        ) : ''}
        <CostSummary>Podsumowanie wszystkich kosztów: {cost}</CostSummary>
        <ItemsContainer>
          <ArrayOfMagazine>{arrayHeader.map(el => <p>{el}</p>)}</ArrayOfMagazine>
          {/* {allMagazine.map(el => <Item key={el._id} item={el}/>)} */}
          <Filter />
        </ItemsContainer>
      </Container>
    </MagazineModalContainer>
  )
}