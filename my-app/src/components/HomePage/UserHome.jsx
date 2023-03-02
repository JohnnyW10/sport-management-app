import React, { useEffect} from "react";
import NavMain from "../Navigation/Navigation";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getClub } from "../../actions/club";
import { useSelector } from "react-redux";

const Container = styled.div`
  color: white;
  min-height: 100vh;
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


const Box = styled.div`
  background-color: rgb(1, 63, 71);
  width: 70%;
  min-height: 10px;
  margin: auto auto 20px auto;
  border-radius: 8px;
  border: 4px solid black;

  p {
    font-size: 1.2rem;
    width: 200px;
    text-align: left;
    margin: 10px auto;
  }
`

const Edit = styled.button`
  width: 120px;
  height: 40px;
  background-color: green;
  color: white;
  border-radius: 8px;
  border: black;
  margin: 10px;
  cursor: pointer;
`

export default function UserHome() {
  const dispatch = useDispatch()
  let isKierownik = true
  let mojKlub = {}

  useEffect(() => {
    dispatch(getClub())
  }, [dispatch])

  const club = useSelector((state) => state.club)
  console.log('Klub', club)

  function filter(element) {
    if(element.name === 'Polonia') {
      console.log('siema ',element)
      return mojKlub = element
    }
    else {
      return mojKlub 
    }
  }
  club.map(element => filter(element))

  return(
    <Container>
      <NavMain type={'User'}/>
      <h2>Witamy na głównej stronie klubu</h2>
      {isKierownik ? (
        <Box>
          <p>Nazwa : {mojKlub.name}</p>
          <p>Adres : Adres</p>
          <p>Kod : {mojKlub.code}</p>
          <p>Hasło : {mojKlub.password}</p>
          <Edit>Edytuj</Edit>
        </Box>): (
        <>
          Siema pracowniku
        </>)
      }
    </Container>
  )
}