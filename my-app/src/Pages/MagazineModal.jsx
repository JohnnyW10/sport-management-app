import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';

const MagazineModalContainer = styled.div`
  color: white;
  min-height: 100vh;
  background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);
`

const Container = styled.div`
  display: flex;
  width: 90%;
  min-height: 80vh;
  margin: 20px auto 0 auto;
`

const ItemsContainer = styled.div`
  width: 400px;
  height: 500px;
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
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
  }

  p {
    button {
      border: none;
      margin-left: 10px;
      background-color: rgb(1, 63, 71);
      font-weight: 700;
      font-size: 1.2rem;
      cursor: pointer;
      color: white;
    }
  }
`

const CostSummary = styled.div`
  text-align: left;
  vertical-align: middle;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
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
  top: calc(50% - 200px);
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
  let [isOpenPopUp, setOpenPopUp] = useState(() => false)
  let [isPopContent, setPopContent] = useState(() => '')
  //I need function which move things to buy to the items column
  let items = [
    {
      name: 'Piłki',
      type: 'Sprzęt sportowy',
      number: 5,
      id: 0,
      person: 'Jan Wolan',
      isBuyed: true,
      isReserved: false,
      cost: 0,
    },
    {
      name: 'Tyczki',
      type: 'Sprzęt sportowy',
      number: 5,
      id: 0,
      person: 'Jan Wolan',
      isBuyed: true,
      isReserved: true,
      cost: 0,
    },
    {
      name: 'Pachołki ',
      type: 'Sprzęt sportowy',
      number: 5,
      id: 0,
      person: 'Jan Wolan',
      isBuyed: false,
      isReserved: false,
      cost: 500,
    }
  ]
  const summaryCost = items.map(el => {
    return cost += el.cost
  })

  const popUpFunction = (el) => {
    setPopContent(isPopContent = el)
    setOpenPopUp(isOpenPopUp = !isOpenPopUp) 
  }

  let Switch = () => {
    switch(isPopContent) {
      case 'Items':
        return (
          <>
            <Title><h3>Dodaj przedmiot</h3><button onClick={() => popUpFunction('')}>X</button></Title>
            <form>
              <label>Nazwa: <input type={'text'} name={'name'}/></label>
              <label>Ilość: <input type={'number'} name={'number'}/></label>
              <label>Typ: <input type={'text'} name={'type'}/></label>
              <button>Dodaj</button>
            </form>
          </>
        )
      case 'Reservation':
        return(
          <>
            <Title><h3>Dodaj rezerwacje</h3><button onClick={() => popUpFunction('')}>X</button></Title>
            <form>
              <select name="name" id="name-select">
                <option value="">Wybierz przedmiot</option>
                {items.map(el => <option value={el.name}>{el.name}</option>)}
              </select>
              <label>Osoba rezerwująca: <input type={'text'} name={'person'}/></label>
              <button>Dodaj</button>
            </form>
          </>
        )
      case 'toBuy':
        return (
          <>
            <Title><h3>Dodaj do</h3><button onClick={() => popUpFunction('')}>X</button></Title>
            <form>
              <label>Nazwa: <input type={'text'} name={'name'}/></label>
              <label>Ilość: <input type={'number'} name={'number'}/></label>
              <label>Typ: <input type={'text'} name={'type'}/></label>
              <button>Dodaj</button>
            </form>
          </>)
    }
  }

  function PopUp() {
    return (
      <PopUpContainer>
        <Switch />
        {/* <h3>{props.popUpContent}</h3><button onClick={() => popUpFunction('')}>X</button>
        <form>
          <label>ID: <input type={'text'} name={'id'}/></label>
          <button>Dodaj</button>
        </form> */}
      </PopUpContainer>
    )
  }

  return(
    <MagazineModalContainer>
      <Navigation/>
      <h3>Magazyn</h3>
      <Container>
      {isOpenPopUp ? (
        <PopUp/>) : ''}
        <ItemsContainer>
          <h4>Przedmioty: <button onClick={() => popUpFunction('Items')} value={'Items'}>+</button></h4>
          {items.map(element => {
            if(element.isBuyed === true) {
              return(<p>{element.type} - {element.number}x {element.name}</p>)
            } 
          })}
        </ItemsContainer>
        <ItemsContainer>
          <h4>Rezerwacje: <button onClick={() => popUpFunction('Reservation')}>+</button></h4>
          {items.map(element => {
            if(element.isReserved === true) {
              return(<p>{element.number}x {element.name} - {element.person}</p>)
            } 
          })}
        </ItemsContainer>
        <ItemsContainer>
          <h4>Rzeczy do kupienia: <button onClick={() => popUpFunction('toBuy')}>+</button></h4>
          {items.map(el => {
            if(el.isBuyed === false) {
              return(<p>{el.number} - {el.name} koszt: {el.cost} zł <button style={{ color: 'green'}}>✓</button><button style={{ color: 'red'}}>X</button></p>)
            } 
          })}
          <CostSummary>Podsumowanie wszystkich kosztów: {cost}</CostSummary>
        </ItemsContainer>
      </Container>
    </MagazineModalContainer>
  )
}