import React, { useState }from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteUser, editUser } from "../../actions/users";

const PersonInfoContainer = styled.div`
  display: grid;
  width: 100%;
  grid-auto-flow: column;  
  grid-auto-columns: 1fr;
  gap: 10px;
  border-bottom: 1px solid ${props => props.primary ? 'rgb(255, 255, 255, 0.4)' : 'white'} !important;

  p {
    display: block;
    color: ${props => props.primary ? 'rgb(255, 255, 255, 0.4)' : 'white'} !important;
    text-align: center;
    width: 100%;
  }
`

const Delete = styled.button`
  background-color: ${props => props.primary ? 'rgb(255, 255, 255, 0.4)' : 'black'};
  color: ${props => props.primary ? 'black' : 'white'};
  border-radius: 8px;
  border: black;
  margin: 10px;
`

const Edit = styled.button`
background-color: ${props => props.primary ? 'rgb(255, 255, 255, 0.4)' : 'green'};
color: ${props => props.primary ? 'black' : 'white'};
  border-radius: 8px;
  border: black;
  margin: 10px;
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


export default function Person({ user }) {
  let [isOpenPopUp, setPopUp] = useState(false)
  const [editUserObject, setEdit] = useState({
    name: '',
    surname: '',
    login: '',
    role: '',
    clubID: '',
    password: '',
    status: '',
    bankAccount: '',
    salary: '',
  })

  const dispatch = useDispatch()

  const handleChange = (event) => {
    const {name, value } = event.target
    setEdit((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const changeStatus = () => {
    if(user.status === 'Aktywny') {
      dispatch(editUser(user._id, {status: 'Nieaktywny'}))
    } else if (user.status === 'Nieaktywny') {
      dispatch(editUser(user._id, {status: 'Aktywny'}))
    }
  }

  const editUserFunction = (event) => {
    event.preventDefault()
    dispatch(editUser(user._id, editUserObject))
  }

  const edit = () => {
    setPopUp(!isOpenPopUp)
  }

  return (
    <PersonInfoContainer primary={user.status === 'Nieaktywny' ? true : false} key={user._id}>
      <p>{user.name}</p>
      <p>{user.surname}</p> 
      <p>{user.login}</p>
      <p>{user.role}</p>
      <p>{user.salary}</p>
      <p>{user.bankAccount}</p>
      <p>{user.status}</p>
      <Delete onClick={changeStatus} primary={user.status === 'Nieaktywny' ? true : false}>Zmień status</Delete>
      <Edit onClick={edit} primary={user.status === 'Nieaktywny' ? true : false}>Edit</Edit>
      {isOpenPopUp ? (
        <PopUp>
          <form onSubmit={editUserFunction}>
          <Title><h3>Edytuj Pracownika</h3><button onClick={() => setPopUp(isOpenPopUp = false)}>X</button></Title>
          <label>Imie: <input name='name' onChange={handleChange} type="text" required placeholder={user.name} /></label>
          <label>Nazwisko: <input name='surname' onChange={handleChange} type="text" required placeholder={user.surname}/></label>
          <label>Login: <input name='login' onChange={handleChange} type="text" required placeholder={user.login}/></label>
          <label>Rola: <input name='role' onChange={handleChange} type="text" required placeholder={user.role}/></label>
          <label>Hasło: <input name='password' onChange={handleChange} type="password" required placeholder={user.password}/></label>
          <label>Wypłata: <input name='salary' onChange={handleChange} type="number" required placeholder={user.salary ? user.salary : 'Dodaj wypłate'} /></label>
          <label>Konto bankowe: <input name='bankAccount' onChange={handleChange} type="text" required placeholder={user.bankAccount ? user.bankAccount : 'Dodaj konto bankowe'}/></label>
          <label>Status: 
            <select name='status' onChange={handleChange}>
              <option value={'Aktywny'}>Aktywny</option>
              <option value={'Nieaktywny'}>Nieaktywny</option>
            </select>
          </label>
          <button>Akceptuj zmiany</button>
          </form>
        </PopUp>) : ''}
    </PersonInfoContainer>
  )
}