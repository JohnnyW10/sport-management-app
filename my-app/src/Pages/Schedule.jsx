import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';

const ScheduleContainer = styled.div`
  color: white;
  min-height: 100vh;
  background: linear-gradient(60deg, rgba(143,188,139,1) 5%, rgba(0,105,62,1) 25%, rgb(1, 63, 71) 60%);
`

const MonthContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  min-height: 60vh;
  border: 1px solid black;
`

const DaysContainer = styled.div`
  
`

export default function Schedule() {
  const months = [
    {
      name: 'Styczeń',
      days: 31,
    },
    {
      name: 'Luty',
      days: 28,
    },
    {
      name: 'Marzec',
      days: 31,
    },
    {
      name: 'Kwiecień',
      days: 31,
    },
    {
      name: 'Maj',
      days: 30,
    },
    {
      name: 'Czerwiec',
      days: 30,
    },
    {
      name: 'Lipiec',
      days: 31,
    },
    {
      name: 'Sierpień',
      days: 31,
    },
    {
      name: 'Wrzesień',
      days: 30,
    },
    {
      name: 'Październik',
      days: 31,
    },
    {
      name: 'Listopad',
      days: 30,
    },
    {
      name: 'Grudzień',
      days: 31,
    },
  ]

  return(
    <ScheduleContainer>
      <Navigation/>
      <h3>Grafik</h3>
      <MonthContainer>

      </MonthContainer>
    </ScheduleContainer>
  )
}