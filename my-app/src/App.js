import './Style/App.css';
import './Style/header.css'
import React, { useEffect } from 'react';
import Home from './components/HomePage/Home'
import AdminHome from './components/HomePage/AdminHome'
import UserHome from './components/HomePage/UserHome'
import { getUsers } from './actions/users'
import Login from './Pages/Login';
import Register from './Pages/Register';
import UsersArrayView from './Pages/Users'
import Schedule from './Pages/Schedule';
import Finance from './Pages/Finance';
import MagazineModule from './Pages/MagazineModal';
import MedicalModule from './Pages/MedicalModal';
import RegisterClub from './Pages/RegisterClub';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
//const API_BASE = 'http://localhost:5000/users'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
    // dispatch(getClub())
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/'element={<Home/>}></Route> 
          <Route path='/admin'element={<AdminHome/>}></Route> 
          <Route path='/user'element={<UserHome/>}></Route> 
          <Route path='/login'element={<Login/>}></Route>
          <Route path='/registerPerson'element={<Register/>}></Route>
          <Route path='/registerClub'element={<RegisterClub/>}></Route>
          <Route path='/Users'element={<UsersArrayView/>}></Route>
          <Route path='/Grafik'element={<Schedule/>}></Route>
          <Route path='/Finance'element={<Finance/>}></Route>
          <Route path='/Magazyn'element={<MagazineModule/>}></Route>
          <Route path='/Medyczny'element={<MedicalModule/>}></Route>
        </Routes>
      </div>
    </Router>
  );
} 