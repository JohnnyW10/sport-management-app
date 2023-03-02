import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteMagazine, editMagazine, createMagazine } from '../../actions/magazine';

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

const Delete = styled.button`
  background-color: ${props => props.primary ? 'rgba(0, 0, 0, 0.3)' : 'black'} !important;  
  color: white;
  border-radius: 8px !important;
  border: black;
  margin: 10px;
`

const Edit = styled.button`
  background: green !important;
  color: white;
  border-radius: 8px !important;
  border: black;
  margin: 10px;
`


const ArrayOfMagazine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 3px solid ${props => props.primary ? 'rgba(255, 255, 255, 0.6)' : 'white'};
  margin: 0 0 16px 0;
  color: ${props => props.primary ? 'rgba(255, 255, 255, 0.6)' : 'white'};
`

export default function MagazineItem({ item }) {
  let [magazineID, setMagazineId] = useState(false)
  const [editedMagazine, setMagazine] = useState({
    name: '',
    id: '',
    number: '',
    clubID: '',
    status: '',
    type: '',
    dateToreturn: '',
    person: '',
    cost: '',
    isBuy: false,
  })
  let [isOpenPopUp, setOpenPopUp] = useState(() => false)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    const {name, value } = event.target
    setMagazine((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const editMagazineFunct = () => {
    console.log(editedMagazine)
    dispatch(editMagazine(magazineID, editedMagazine))
  }

  const changeStatus = (id, magazine) => {
    if(magazine.status === 'Wypożyczony') {
      let mag = {
        name: magazine.name,
        id: magazine.id,
        number: magazine.number,
        clubID: magazine.clubID,
        status: 'Oddany',
        dateToreturn: magazine.dateToreturn,
        type: magazine.type,
        person: magazine.person,
        cost: magazine.cost,
        isBuy: magazine.isBuy,
      }
      dispatch(createMagazine(mag))
      dispatch(editMagazine(id, {status: 'W magazynie'}))
    }
  }

  const zakupione = (id) => {
    dispatch(editMagazine(id, {isBuy: true}))
  }

  const edit = (id) => {
    setOpenPopUp(!isOpenPopUp)
    setMagazineId(id)
  }

  const ShowButton = () => {
    if(item.isBuy && item.status === 'Wypożyczony') {
      return <Delete primary={item.status === 'Oddany' ? true : false} onClick={() => changeStatus(item._id, item)}>Oddaj</Delete>
    } else if (!item.isBuy) {
      return <Delete onClick={() => zakupione(item._id)}>Zakupione</Delete>
    }  else {
      return ''
    }
  }

  return(
    <>
    {isOpenPopUp ? (
        <PopUpContainer>
          <Title><h3>Edytuj </h3><button onClick={() => setOpenPopUp(isOpenPopUp = false)}>X</button></Title>
           <form onSubmit={editMagazineFunct}>
             <label>Nazwa: <input type="text" onChange={handleChange} name="name" required placeholder={item.name}/></label>
             <label>Ilość: <input type="number" onChange={handleChange} name="number" required placeholder={item.number}/></label>
             <label>Koszt: <input type="number" onChange={handleChange} name="cost" placeholder={item.cost}/></label>
             {editedMagazine.isBuy ? (
              <label> 
                Status wypożyczenia: 
                <select onChange={handleChange} name="status" required>
                <option value="Status wypożyczenia">Status wypożyczenia</option>
                  <option value="Wypożyczony">Wypożyczony</option>
                  <option value="W magazynie">W magazynie</option>
                </select>
              </label>
             ) : ''}
             {editedMagazine.status === 'Wypożyczony' ? (
              <>
                <label>Data zwrotu: <input type="date" onChange={handleChange} name="dateToreturn"/></label>
                <label>Osboa wypożyczająca: <input type="text" onChange={handleChange} name="person" placeholder={item.person}/></label>
              </>
             ) : ''}
            <label> 
                Status zakupu: 
               <select onChange={handleChange} name="isBuy" required>
               <option>Status zakupu</option>
                 <option value={true}>Kupiony</option>
                 <option value={false}>Do zakupu</option>
               </select>
            </label>
             <label>
               Typ: 
               <select onChange={handleChange} name="type" required placeholder={item.type}>
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
      <ArrayOfMagazine key={item._id} primary={item.status === 'Oddany' ? true : false}>
        <p>{item.name}</p><p>{item.number}x</p><p>{item.status}</p><p>{item.type}</p><p>{item.person}</p><p>{item.dateToreturn}</p><p>{item.isBuy ? 'Kupione' : 'Do zakupu'}</p><p>{item.cost}</p>
        <Edit onClick={() => edit(item._id)}>Edytuj</Edit>
        <ShowButton/>
      </ArrayOfMagazine>
    </>
  )
}
