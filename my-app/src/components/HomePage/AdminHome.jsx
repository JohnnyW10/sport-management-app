import React, { useEffect} from "react";
import NavMain from "../Navigation/Navigation";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getClub, deleteClub, editClub } from "../../actions/club";
import { useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  color: white;
  padding-bottom: 20px;
  background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);

  select {
    width: 200px;
    text-align: center;
    margin: auto;
    display: block;
    border-radius: 10px;
    line-height: 1.2rem;
    margin-bottom: 20px;
    padding: 5px;
  }
`

const ClubContainer = styled.div`
  width: 90%;
  min-height: 1000px;
  margin: auto;
`

const OneClub = styled.div`
  background-color: rgb(1, 63, 71);
  width: 90%;
  min-height: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: auto auto 20px auto;
  border-radius: 8px;
  border: 4px solid black;
`

const NavBox = styled.div`
  width: 90%;
  min-height: 70px;
  margin: auto auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

const Delete = styled.button`
  background-color: red;
  color: white;
  border-radius: 8px;
  border: black;
  margin: 10px;
  cursor: pointer;
`

const Edit = styled.button`
  background-color: green;
  color: white;
  border-radius: 8px;
  border: black;
  margin: 10px;
  cursor: pointer;
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

export default function UserHome() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getClub())
  }, [dispatch])

  const club = useSelector((state) => state.club)
  console.log(club)

  return(
    <Container>
      <NavMain type={'Admin'}/>
      <h2>Kluby</h2>
      <ClubContainer>
        <NavBox>
          <p>Nazwa</p>
          <p>Kod</p>
          <p>Adres</p>
          <p>Edytuj</p>
          <p>Usuń</p>
        </NavBox>
        {club.map(element => <ClubBox key={element._id} klub={element}/>)}
      </ClubContainer>
    </Container>
  )
}

function ClubBox({klub}) {
  const dispatch = useDispatch()
  let [openPopUp, setPopUp] = useState(false)
  let [clubID, setClibId] = useState(false)

  const [editClubInfo, setClub] = useState({
    name: '',
    login: '',
    password: '',
    clubID: '',
    adres: '',
  })

  const handleChange = (event) => {
    const {name, value } = event.target
    setClub((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  }

  const takeClubId = (id) => {
    setPopUp( openPopUp = !openPopUp )
    setClibId( clubID = id )
    console.log(clubID)
  }

  const editClubFunction = (event) => {
    event.preventDefault()
    console.log(editClubInfo)
    dispatch(editClub(clubID, editClubInfo))
  }

  const deleteC = (id) => {
    dispatch(deleteClub(id))
  }

  return(
    <OneClub key={klub._id}>
      {openPopUp ? (
      <PopUp>
        <Title><h3>Edytuj Pracownika</h3><button onClick={() => setPopUp(openPopUp = false)}>X</button></Title>
        <form onSubmit={editClubFunction}>
          <label>Nazwa Klubu: <input name='name' onChange={handleChange} type="text" required placeholder="Nazwa"/></label>
          <label>Login: <input name='login' onChange={handleChange} type="text" required placeholder="Login"/></label>
          <label>Hasło klubu: <input name='password' onChange={handleChange} type="password" required placeholder="Hasło"/></label>
          <label>ID klubu: <input name='clubID' onChange={handleChange} type="text" required placeholder="Kod klubu"/></label>
          <label>Adres: <input name='adres' onChange={handleChange} type="text" required placeholder="Adres"/></label>
          <button>Rejestracja</button>
        </form>
      </PopUp>
      ) : ''}
      <h4>{klub.name}</h4>
      <h4>{klub.clubID}</h4>
      <h4>{klub.adres}</h4>
      <Edit onClick={() => takeClubId(klub._id)}>Edytuj</Edit>
      <Delete onClick={() => deleteC(klub._id)}>Usuń</Delete>
    </OneClub>
  )
}