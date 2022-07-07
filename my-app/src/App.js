import './Style/App.css';
import './Style/header.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import ManPng from './Images/man.png'
import { BsFillPersonPlusFill, BsFillPersonFill, BsJustify } from "react-icons/bs";


const API_BASE = 'http://localhost:5000/users'

function App() {
  const [Users, setUsers] = useState([])
  let trueOrfalse = false;
  const moduls = [
    {
      name: '',
      description: '',
    },

  ]

  useEffect(() => {
    GetUsers();
  }, []) 

  const GetUsers = () => {
    fetch(API_BASE)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("error: ", err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <button title='Main'>SCM</button>
        <button title='Register'><BsFillPersonPlusFill/></button>
        <button title='Log in'><BsFillPersonFill /></button>
        <button title='Menu'><BsJustify /></button>
      </header>

      <section class='aboutPage'>
        <div className='contentPage'>
          <h1>Aplikacja do zarządzania klubem sportowym</h1>
          <p id='to'>Jesteśmy doskonałym rozwiązaniem aby wnieść wasz klub na wyższy poziom i zadbać o wasz rozwój i możliwość konkurowania z czołowymi klubami w całej Polsce !</p>
        </div>
        <img id='mainImgMan' src={ManPng} width='500px' height='500px' alt='Young man which show hand with thumb to the top - like'/>
      </section>

      <section class='module'>
        <h2>Dostępne moduły: </h2>
      </section>
    </div>
  );
}

export default App;


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
}


{/*<BrowserRouter>
          <Routes>
            <Route path='/line' element='Line'/>
          </Routes>
</BrowserRouter>*/}

{/*<UserComponent data={Users}/>*/ }