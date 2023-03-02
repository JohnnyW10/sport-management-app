import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import Injury from "../components/MedicalModal/Injury";
import { useDispatch, useSelector } from "react-redux";
import { getInjury, createInjury, deleteInjury, editInjury } from "../actions/injury";

const MedicalModuleContainer = styled.div`
  color: white;
  min-height: 100vh;
  background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);
`
const Container = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
`

const AddInjury = styled.div`
  width: 400px;
  min-height: 500px;
  border: 1px solid white;
  border-radius; 8px;
  //margin-left: 1rem;
  margin: 1rem auto auto auto;
  background-color: rgb(1, 63, 71);
  border: 3px solid black;
  border-radius: 8px;
  box-shadow: 10px 10px 5px rgb(1, 39, 44);

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

    label, textarea, input, select {
      text-align: center;
      margin: auto;
      display: block;
      margin-bottom: 10px;
    }
  
    input, textarea {
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

const PopUpContainer = styled.div`
  width: 450px;
  min-height: 200px;
  position: fixed; 
  z-index: 1;
  background: rgb(1, 63, 71);
  border-radius: 8px;
  border: 3px solid black;
  margin: auto;
  top: calc(50% - 240px);
  left: calc(50% - 225px);

  form {
    select, option, textarea {
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
  
    input, textarea {
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

const FotballersInjury = styled.div`
  width: 100%;
  border: 1px solid white;
  border-radius; 8px;
  margin: auto auto 2rem auto;
  background-color: ${props => props.primary ? 'rgba(0, 0, 0, 0.6)' : 'rgb(1, 63, 71)'};
  color: ${props => props.primary ? 'rgba(255, 255, 255, 0.6)' : 'white'};
  border: 3px solid black;
  border-radius: 8px;
  box-shadow: 10px 10px 5px rgb(1, 39, 44);
  overflow: hidden;

  h4 {
    margin: 1rem;
  }

  button {
    background: ${props => props.primary ? 'rgba(0, 0, 0, 0.7)' : ''} !important;
  }
`

const DisplayInjury = styled.div`
  width: 800px;
  min-height: 500px;
  margin: auto;
`

const ChangeButton = styled.button`
  margin-left: 10px;
  padding: 5px 15px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;

  &:hover {
    background-color: rgb(194, 47, 17);
  }
`

const Edit = styled.button`
  background: green;
  color: white;
  padding: 5px 15px;
  border-radius: 8px;
  border: black;
  margin: 10px;
  cursor: pointer;
`

export default function MedicalModule() {
  let [isOpenPopUp, setOpenPopUp] = useState(() => false)
  let [injuryID, setInjuryId] = useState(false)
  const [footballer, setFootballer] = useState({
    id: 1,
      name: '',
      howLong: 0,
      type: '',
      description: '',
      exercise: '',
      status: '',
  })
  const [editFootballer, setEditFootballer] = useState({
    id: 1,
      name: '',
      howLong: 0,
      type: '',
      description: '',
      exercise: '',
      status: '',
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInjury())
  }, [dispatch])

  const AllInjury = useSelector((state) => state.injury)
  
  const handleChange = (event) => {
    const {name, value } = event.target
    setFootballer((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const handleEditChange = (event) => {
    const {name, value } = event.target
    setEditFootballer((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const editInjuryFunction = (event) => {
    event.preventDefault()
    dispatch(editInjury(injuryID, editFootballer))
    console.log(editFootballer)
  }
  
  const getNewUSer = (event) => {
    event.preventDefault()
    dispatch(createInjury(footballer))
  }

  let footballers = [
    {
      id: 0,
      person: 'Jan Wolan',
    },
    {
      id: 2,
      person: 'Jan Messi',
    },
    {
      id: 3,
      person: 'Ronaldo',
    },
    {
      id: 4,
      person: 'Janusz',
    },
  ]

  const deleteI = (id, person) => {
    console.log(person.status)
    if(person.status === 'Aktywny') {
      dispatch(editInjury(id, {status: 'Nieaktywny'}))
    } else {
      dispatch(editInjury(id, {status: 'Aktywny'}))
    }
  }

  const edit = (id) => {
    setOpenPopUp(!isOpenPopUp)
    setInjuryId(id)
  }
  

  return(
    <MedicalModuleContainer>
      <Navigation type={'User'}/>
      <h2>Moduł Medyczny</h2>
      {isOpenPopUp ? (
        <PopUpContainer>
          <Title><h3>Dodaj przedmiot</h3><button onClick={() => setOpenPopUp(isOpenPopUp = false)}>X</button></Title>
           <form onSubmit={editInjuryFunction}>
            <select onChange={handleEditChange} name="name" id="name-select">
                <option value="">Wybierz Piłkarza</option>
                {footballers.map(el => <option value={el.person}>{el.person}</option>)}
              </select>
              <label>Długośc absencji: <input onChange={handleEditChange} type={'number'} name={'howLong'}/></label>
              <label>Typ kontuzji: <input onChange={handleEditChange} type={'text'} name={'type'}/></label>
              <label>Szczegóły: <textarea onChange={handleEditChange} type={'text'} name={'description'}/></label>
              <label>Ćwiczenia: <textarea onChange={handleEditChange} type={'text'} name={'exercise'}/></label>
              <label>
                Status:
                <select onChange={handleEditChange} name="status">
                  <option value="">Status</option>
                  <option value={'Aktywny'}>{'Aktywny'}</option>
                  <option value={'Nieaktywny'}>{'Nieaktywny'}</option>
                </select>
              </label>
              <button>Dodaj</button>
           </form>
        </PopUpContainer>
        ) : ''}
      <Container>
        <AddInjury>
          <h4>Dodaj kontuzje: </h4>
          <form onSubmit={getNewUSer}>
            <select onChange={handleChange} name="name" id="name-select">
              <option value="">Wybierz Piłkarza</option>
              {footballers.map(el => <option value={el.person}>{el.person}</option>)}
            </select>
            <label>Długośc absencji: <input onChange={handleChange} type={'number'} name={'howLong'}/></label>
            <label>Typ kontuzji: <input onChange={handleChange} type={'text'} name={'type'}/></label>
            <label>Szczegóły: <textarea onChange={handleChange} type={'text'} name={'description'}/></label>
            <label>Ćwiczenia: <textarea onChange={handleChange} type={'text'} name={'exercise'}/></label>
            <label>
              Status:
              <select onChange={handleChange} name="status">
                <option value="">Status</option>
                <option value={'Aktywny'}>{'Aktywny'}</option>
                <option value={'Nieaktywny'}>{'Nieaktywny'}</option>
              </select>
            </label>
            <button>Dodaj</button>
          </form>
        </AddInjury>
        <DisplayInjury>
          {AllInjury ? AllInjury.map(person => <FotballersInjury primary={person.status === 'Nieaktywny' ? true : false}><h4>{person.name}<ChangeButton onClick={() => deleteI(person._id, person)}>Zmień status</ChangeButton><Edit onClick={() => edit(person._id)}>Edytuj</Edit></h4><Injury injury={person}/></FotballersInjury>) : ''}
        </DisplayInjury>
      </Container>
    </MedicalModuleContainer>
  )
}