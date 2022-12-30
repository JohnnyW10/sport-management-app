import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';

const MedicalModuleContainer = styled.div`
  color: white;
  min-height: 100vh;
  background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);
`
const Container = styled.div`
  width: 100%;
`

const AddInjury = styled.div`
  width: 400px;
  min-height: 500px;
  border: 1px solid white;
  border-radius; 8px;
  margin-left: 1rem;
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

    label, textarea, input {
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

export default function MedicalModule() {
  let footballers = [
    {
      id: 0,
      person: 'Jan Wolan',
      injury: [],
    },
    {
      id: 0,
      person: 'Karol Pajda',
      injury: [],
    },
    {
      id: 0,
      person: 'Mateusz Tokarczyk',
      injury: [],
    }
  ]

  let injury = [
    {
      id: 1,
      name: 'Jan Wolan',
      howLong: 7,
      type: 'Złamanie głowy',
      description: 'Spadł i głupi łeb rozwalił',
      exercise: 'Czytaj więcej książek na głupote',
    },
    {
      id: 2,
      name: 'Karol Pajda',
      howLong: 7,
      type: 'Złamanie palca',
      description: 'Spadł i głupi palec rozwalił',
      exercise: 'Czytaj mniej książek na głupote',
    },
    {
      id: 3,
      name: 'Mateusz Tokarczyk',
      howLong: 14,
      type: 'Złamanie palca',
      description: 'Spadł i głupi palec rozwalił',
      exercise: 'Czytaj mniej książek na głupote',
    },
  ]

  return(
    <MedicalModuleContainer>
      <Navigation/>
      <h2>Moduł Medyczny</h2>
      <Container>
        <AddInjury>
          <h4>Dodaj kontuzje: </h4>
          <form>
            <select name="name" id="name-select">
              <option value="">Wybierz Piłkarza</option>
              {footballers.map(el => <option value={el.person}>{el.person}</option>)}
            </select>
            <label>Długośc absencji: <input type={'number'} name={'howLong'}/></label>
            <label>Typ kontuzji: <input type={'text'} name={'type'}/></label>
            <label>Szczegóły: <textarea type={'text'} name={'description'}/></label>
            <label>Ćwiczenia: <textarea type={'text'} name={'exercise'}/></label>
            <button>Dodaj</button>
          </form>
        </AddInjury>
      </Container>
    </MedicalModuleContainer>
  )
}