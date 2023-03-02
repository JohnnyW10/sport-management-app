import React from "react";
import styled from "styled-components";

const InjuryContainers = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 2fr 2fr 1fr;
  text-align: center;
  justify-content: center;
  border-top: 3px solid black;

  p {
    min-height: 20px;
    margin: 0;
    padding: 1rem;
    border-right: 3px solid black;
    
  }

  p:last-child {
    border-right: none;
  }
`
const InjuryTitle = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 2fr 2fr 1fr;
  text-align: center;
  justify-content: center;
  border-bottom: 2px solid black;
  align-items: center;

  p {
    margin: 1rem;
  }
`



export default function Injury({ injury }) {
  return(
    <div>
      <InjuryTitle>
        <p>Typ: </p>
        <p>Jak długo trwa kontuzja:</p>
        <p>Opis: </p>
        <p>Ćwiczenia: </p>
        <p>Status: </p>
      </InjuryTitle>
        <InjuryContainers>
        <p>{injury.type}</p>
        <p>{injury.howLong}</p>
        <p>{injury.description}</p>
        <p>{injury.exercise}</p>
        <p>{injury.status}</p>
      </InjuryContainers>
    </div>
  )
}