import './Style/App.css';
import './Style/header.css'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import {useState, useEffect} from 'react'
import ManPng from './Images/man.png'
import { BsFillPersonPlusFill, BsFillPersonFill, BsJustify, BsCalendarCheck, BsCashCoin, BsShieldPlus, BsPeopleFill, BsClipboardData } from "react-icons/bs";

//const API_BASE = 'http://localhost:5000/users'

export default function App() {
  const moduls = [
    {
      name: 'Moduł zarządzania finansami',
      description: 'Ten moduł pomoże Ci w monitorowaniu wydatków oraz ułatwi prowadzenie klubu',
      icon: <BsCashCoin />,
      class: 'module moduleOne'
    },

    {
      name: 'Moduł prowadzący grafik infrastruktury klubu',
      description: 'Będzie prowadził kalendarz oraz grafik dla boiska sportowego',
      icon: <BsCalendarCheck />,
      class: 'module moduleTwo'
    },


    {
      name: 'Moduł zarządzania personelem',
      description: 'Będziesz miał wgląd w dane każdego pracownika',
      icon: <BsPeopleFill />,
      class: 'module moduleOne'
    },

    {
      name: 'Moduł magazynowy',
      description: 'Będziesz monitorował użycie sprzętu oraz będzie Ci łatwiej zarządzać nim',
      icon: <BsClipboardData/>,
      class: 'module moduleTwo'
    },

    {
      name: 'Moduł medyczny',
      description: 'Będziemy prowadzili zeszyt kontuzji danego zawodnika',
      icon: <BsShieldPlus />,
      class: 'module moduleOne'
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <button title='Main'>SCM</button>
        <button title='Register'><BsFillPersonPlusFill/></button>
        <button title='Log in'><BsFillPersonFill /></button>
        <button title='Menu'><BsJustify /></button>
      </header>

      <main>
      <section class='aboutPage'>
        <div className='contentPage'>
          <h1>Aplikacja do zarządzania klubem sportowym</h1>
          <p id='to'>Jesteśmy doskonałym rozwiązaniem aby wnieść wasz klub na wyższy poziom i zadbać o wasz rozwój i możliwość konkurowania z czołowymi klubami w całej Polsce !</p>
        </div>
        <img id='mainImgMan' src={ManPng} width='500px' height='500px' alt='Young man which show hand with thumb to the top - like'/>
      </section>

      <section class='moduleBox'>
        <h2>Dostępne moduły: </h2>
        <div>
        {moduls.map(el => {
          return (<div title={el.name} className={el.class} key={el.name}>
            <h3>{el.name}</h3>
            <p>{el.description}</p>
            <p className='icon'>{el.icon} </p>
          </div>)
        })}
        </div>
      </section>
      </main>
      <footer>
        {Flat()}
        {padF()}
      </footer>
    </div>
  );
}

function Flat() {
  const arr = [1,2,3,[4,5,6, [7,8,9]]]
  //console.log(arr.flat(Infinity))
  flatMapp()
}

function flatMapp () {
  let arr = [3,6,9]

  //arr.map(x => [x, x*3])
  console.log(arr.flatMap(v => [v, v*2, v+1]))


  let entries = new Map([
    ['name', 'Jan'],
    ['Surname', 'Wolan']
  ])

  console.log(Object.fromEntries(entries))

  let greetings = '   Hello World !    '

  console.log(JSON.stringify(greetings.trimStart()))


  const ob1 = {name: 'John', arr: [{
    person: 'on'
  }]}
  const ob2 = {surname : 'Wolan'}

  const ob3 = {...ob1, ...ob2, role: 'Progrmammer'}
  console.log(ob3)

}


function padF() {
  const str1 = '1'
  console.log(str1.padStart(5, '-'))

  const pi = '3,14232442'
  let newN = pi
  console.log(newN.padEnd(20, '*'))
}



/*
  const [Users, setUsers] = useState([])


  useEffect(() => {
    GetUsers();
  }, []) 

  const GetUsers = () => {
    fetch(API_BASE)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("error: ", err))
  }

function UserComponent(props) {

  return(<div class="container">
    {props.data.map( el => {
      return <UserInfo info={el}/>
    })}
  </div>)
}



function UserInfo(props) {
  console.log(props.info)
  const to = props.info
  return(<div class="person">
    <p>Login {to.login}</p>
    <p>Password: {to.password}</p>
    <p>Mail: {to.mail}</p>
    <p>Role: {to.role}</p>
  </div>)
} */


/*<BrowserRouter>
          <Routes>
            <Route path='/line' element='Line'/>
          </Routes>
</BrowserRouter>*/

/*<UserComponent data={Users}/>*/ 