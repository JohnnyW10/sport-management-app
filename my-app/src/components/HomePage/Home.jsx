import '../../Style/header.css'
import React from 'react';
import ManPng from '../../Images/man.png'
import Navigation from '../../components/Navigation/Navigation';
import {BsCalendarCheck, BsCashCoin, BsShieldPlus, BsPeopleFill, BsClipboardData, BsTwitter,  BsFacebook, BsInstagram } from "react-icons/bs";
import styled from 'styled-components';

const ContactInformationStyle = styled.div`
  height: 45%;
  text-align: right;
  color: white;
  padding: 10px 10%;

  h2{
    margin: 0;
  }

  svg {
    padding: 10px;
    font-size: 1.5em;
    border: 1px solid rgb(255, 255, 255, 0);

    &:hover {
      border: 1px solid white;
      border-radius 50%;
      color: red;
    }
  }
`;
export default function Home() {
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

  const contact = {
    name: "Contact",
    phoneNumber: '733271263',
    mail: "jw.wolan@gmail.com",
    workHour: "Open mnd-fri : 8-16",
  }

  const socialMedia = {
    name: "Social media",
    fbIcon: <BsFacebook />,
    instIcon: <BsInstagram />,
    twitterIcon: <BsTwitter /> 
  }

  return (
  <>
    <Navigation type={'Home'}/>
    <main>
      <section className='aboutPage'>
        <div className='contentPage'>
          <h1>Aplikacja do zarządzania klubem sportowym</h1>
          <p id='to'>Jesteśmy doskonałym rozwiązaniem aby wnieść wasz klub na wyższy poziom i zadbać o wasz rozwój i możliwość konkurowania z czołowymi klubami w całej Polsce !</p>
        </div>
        <img id='mainImgMan' src={ManPng} width='500px' height='500px' alt='Young man which show hand with thumb to the top - like'/>
      </section>
      <section className='moduleBox'>
        <h2>Dostępne moduły: </h2>
        <div>
          {moduls.map(el => {
            return (
            <div title={el.name} className={el.class} key={el.name}>
              <h3>{el.name}</h3>
              <p>{el.description}</p>
              <p className='icon'>{el.icon} </p>
            </div>
          )})}
        </div>
      </section>
    </main>
    <footer>
      <ContactInformationStyle>
        <h2>{contact.name}</h2>
        <p>Number: {contact.phoneNumber}</p>
        <p>Mail: {contact.mail}</p>
        <p>{contact.workHour}</p>
      </ContactInformationStyle>
      <ContactInformationStyle>
        <h2>{socialMedia.name}</h2>
        {socialMedia.fbIcon}
        {socialMedia.instIcon}
        {socialMedia.twitterIcon}
      </ContactInformationStyle>
    </footer>
  </>)
}