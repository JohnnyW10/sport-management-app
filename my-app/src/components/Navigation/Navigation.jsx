import React from "react";
import { useState } from "react";
import { BsFillPersonPlusFill, BsFillPersonFill, BsJustify} from "react-icons/bs";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Menu = styled.div`
  width: 20%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: rgb(1, 63, 71);

  button {
    width: 60%;
    margin: 40px auto;
    text-align: center;
    font-size: 1.1rem;
    padding: 10px 20px;
  }
`

const CloseButton = styled.button`
  width: 40px !important;
  height: 40px !important;
  text-align: center;
  margin: auto;
  padding: 0 !important;
  position: absolute;
  left: -20px;
  top: 50%;
  font-size: 1rem;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  color: black;
`

const MenuShadow = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;
  background: rgb(0, 0, 0, 0.7);
`

export default function Navigation() {
  let [isOpen, setOpen] = useState(() => false)

  return (
    <header className="App-header">
      <Link to="/"><button title='Main'>SCM</button></Link>
      <Link to="/register"><button title='Register'><BsFillPersonPlusFill/></button></Link>
      <Link to="/login"><button title='Log in'><BsFillPersonFill /></button></Link>
      {isOpen ? (
      <MenuShadow>
        <Menu>
          <CloseButton onClick={() => setOpen(isOpen = !isOpen)}>X</CloseButton>
          <Link to="/Finance"><button>Finanse</button></Link>
          <Link to="/Grafik"><button>Grafik</button></Link>
          <Link to="/Users"><button>Zarządzania personelem</button></Link>
          <Link to="/Magazyn"><button>Magazynowy</button></Link>
          <Link to="/Medyczny"><button>Moduł medyczny</button></Link>
        </Menu>
      </MenuShadow>
      ) : ''}
      <button title='Menu' onClick={() => setOpen(isOpen = !isOpen)}><BsJustify /></button>
    </header>
  )
}