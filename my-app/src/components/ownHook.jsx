import React, {useState, useEffect} from "react";
// zrobienie 2 funkcji ja w których potrzebujemy procenty z egzaminu jedna funkcja określa ocene a druga czy zdane czy nie 

function IssuingGrades() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  return(<div>
    <TestPass number = {randomNumber}/>
    <TestRate number = {randomNumber}/> 
    <TestGrade number = {randomNumber}/>
  </div>)
}

function TestGrade(props) {
  const isThatPerosnPass = useTestRating(props.number)
  let grade = ''

  if(isThatPerosnPass < 30) grade = 'ndst';
  else if(isThatPerosnPass >= 30 && isThatPerosnPass < 50)  grade = 'dp';
  else if (isThatPerosnPass >= 50 && isThatPerosnPass < 75) grade = 'dst';
  else if (isThatPerosnPass >= 75 && isThatPerosnPass < 85) grade = 'db';
  else if (isThatPerosnPass >= 85 && isThatPerosnPass < 95) grade = 'bdb';
  else if (isThatPerosnPass >= 95) grade = 'cel';

  return(<p>Ocena: {grade}</p>)
}

function TestPass(props) {
  const isThatPerosnPass = useTestRating(props.number)
  
  return(<div>
    {isThatPerosnPass} %
  </div>)
}

function TestRate(props) {
  const isThatPerosnPass = useTestRating(props.number)

  if (isThatPerosnPass >= 50) {
    return (<p>Zdane</p>)
  } else {
    return (<p>oblane</p>)
  }
}




function useTestRating(rating) {
  const [rate, setRate] = useState(0)

  useEffect(() => {
    setRate(rating/10 * 100)
  }, [])

  return rate
}



export default IssuingGrades;