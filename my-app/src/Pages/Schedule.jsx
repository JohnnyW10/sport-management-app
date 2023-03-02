import React, {useState} from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import { getSchedule, deleteSchedule, editSchedule, createSchedule } from "../actions/schedule";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ScheduleContainer = styled.div`
  color: white;
  min-height: 100vh;
  background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);

  h3 {
    button {
      margin: 5px 10px;
      color: white;
      background-color: rgb(1, 63, 71);
      cursor: pointer;
      border: none;
      font-size: 1rem;
      border: 1px solid white;
      border-radius: 8px;
      padding: 5px 10px;
    }
  }
`

const DayContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr 1fr 1fr;
  background-color: rgb(1, 63, 71);
  color: white;
  overflow: hidden;
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

const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr 1fr 1fr;
  border-bottom: 1px solid white
`

const Delete = styled.button`
  background: black;
  color: white;
  border-radius: 8px;
  margin: 10px;
`

const Edit = styled.button`
  background: green;
  color: white;
  border-radius: 8px;
  margin: 10px;
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


export default function Schedule() {
  let [isOpenPopUp, setOpenPopUp] = useState(false)
  let arrayHeader = ['Data', 'Nazwa', 'Osoba', 'Godzina od', 'Godzina do', 'Opis', 'Edytuj', 'Usuń']
  const dispatch = useDispatch()
  const [newSchedule, setNewSchedule] = useState({
    name: '',
    hourFrom: '',
    hourTo: '',
    description: '',
    person: '',
    place: '',
    clubID: '',
    data: new Date(''),
  })

  useEffect(() => {
    dispatch(getSchedule())
  }, [dispatch])

  const schedule = useSelector((state) => state.schedule)

  const handleChange = (event) => {
    const {name, value } = event.target
    setNewSchedule((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  schedule.sort((a, b) => new Date(a.data) - new Date(b.data));

  const addGrafic = (event) => {
    event.preventDefault()
    console.log(newSchedule)
    dispatch(createSchedule(newSchedule))
  }

  return(
    <ScheduleContainer>
      <Navigation type={'User'}/>
      <h3>Grafik<button onClick={() => setOpenPopUp(true)}>Dodaj do grafiku</button></h3>
      {isOpenPopUp ? (
        <PopUp>
          <Title><h3>Zarezerwuj</h3><button onClick={() => setOpenPopUp(isOpenPopUp = false)}>X</button></Title>
          <form onSubmit={addGrafic}>
            <label>Nazwa: <input type={'text'} name={'name'} onChange={handleChange}/></label>
            <label>
              Miejsce: 
             <select name={'place'} onChange={handleChange}>
                <option value={'Boisko'}>Boisko</option>
                <option value={'SzNr1'}>Szatnie nr1</option>
                <option value={'SzNr2'}>Szatnie nr2</option>
                <option value={'SzNr3'}>Szatnie nr3</option>
                <option value={'Siłownie'}>Siłownie</option>
              </select>
            </label>
            <label>Od godziny<input type={'time'} name={'hourFrom'} onChange={handleChange} /></label>
            <label>Do godziny <input type={'time'} name={'hourTo'} onChange={handleChange}/></label>
            <label>Data <input type={'date'} name={'data'} onChange={handleChange}/></label>
            <label>Opis <input type={'text'} name={'description'} onChange={handleChange}/></label>
            <label>
              Kto rezerwuje: 
              <input type={'text'} name={'person'} onChange={handleChange}/>
            </label>
            <button>Dodaj</button>
          </form>
        </PopUp>) : ''}
        <Header>{arrayHeader.map(el => <p>{el}</p>)}</Header>
        {schedule.map( el => <Days item={el}/>)}
    </ScheduleContainer>
  )
}

function Days({item}) { 
  let [isOpenPopUp, setOpenPopUp] = useState(false)
  const dispatch = useDispatch()
  const [editScheduleBox, setEditSchedule] = useState({
    name: '',
    hourFrom: '',
    hourTo: '',
    description: '',
    person: '',
    place: '',
    clubID: '',
    data: new Date(''),
  })

  const handleChange = (event) => {
    const {name, value } = event.target
    setEditSchedule((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const editScheduleFunction = (event) => {
    event.preventDefault()
    dispatch(editSchedule(item._id, editScheduleBox))
  }

  const deleteScheduleFunction = (event) => {
    event.preventDefault()
    dispatch(deleteSchedule(item._id))
  } 

  return (
    <DayContainer>
      {isOpenPopUp ? (
        <PopUp>
          <Title><h3>Zarezerwuj</h3><button onClick={() => setOpenPopUp(isOpenPopUp = false)}>X</button></Title>
          <form onSubmit={editScheduleFunction}>
          <label>Nazwa: <input type={'text'} name={'name'} onChange={handleChange}/></label>
            <label>
              Miejsce: 
             <select name={'place'} onChange={handleChange}>
                <option value={'Boisko'}>Boisko</option>
                <option value={'SzNr1'}>Szatnie nr1</option>
                <option value={'SzNr2'}>Szatnie nr2</option>
                <option value={'SzNr3'}>Szatnie nr3</option>
                <option value={'Siłownie'}>Siłownie</option>
              </select>
            </label>
            <label>Od godziny<input type={'time'} name={'hourFrom'} onChange={handleChange} /></label>
            <label>Do godziny <input type={'time'} name={'hourTo'} onChange={handleChange}/></label>
            <label>Data <input type={'date'} name={'data'} onChange={handleChange}/></label>
            <label>Opis <input type={'text'} name={'description'} onChange={handleChange}/></label>
            <label>
              Kto rezerwuje: 
              <input type={'text'} name={'person'} onChange={handleChange}/>
            </label>
            <button>Dodaj</button>
          </form>
        </PopUp>) : ''}
      <p>{item.data}</p><p>{item.name}</p><p>{item.person}</p><p>{item.hourFrom}</p><p>{item.hourTo}</p><p>{item.description}</p><Edit onClick={() => setOpenPopUp(true)}>Edytuj</Edit><Delete onClick={deleteScheduleFunction}>Usuń</Delete>
    </DayContainer>
  )
}