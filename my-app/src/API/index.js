import axios from 'axios'

const urlUser = 'http://localhost:5000/users'
const urlClub = 'http://localhost:5000/clubs'
const urlFinance = 'http://localhost:5000/finance'
const urlMagazine = 'http://localhost:5000/magazine'
const urlInjury = 'http://localhost:5000/injury'
const urlSchedule = 'http://localhost:5000/schedule'

export const fetchUsers = () => axios.get(urlUser)
export const createUser = (newUser) => axios.post(urlUser, newUser)
export const deleteUser = (id) => axios.delete(urlUser, id)
export const editUser = (user) => axios.put(urlUser, user)



export const fetchClubs = () => axios.get(urlClub)
export const createClubs = (newClub) => axios.post(urlClub, newClub)
export const deleteClub = (id) => axios.delete(urlClub, id)
export const editClub = (club) => axios.put(urlClub, club)



export const fetchFinance = () => axios.get(urlFinance)
export const createFinance = (newFinance) => axios.post(urlFinance, newFinance)
export const deleteFinance = (id) => axios.delete(urlFinance, id)
export const editFinance = (finance) => axios.put(urlFinance, finance)


export const fetchMagazine = () => axios.get(urlMagazine)
export const createMagazine = (newMagazine) => axios.post(urlMagazine, newMagazine)
export const deleteMagazine = (id) => axios.delete(urlMagazine, id) 
export const editMagazine = (magazine) => axios.put(urlMagazine, magazine)


export const fetchInjury = () => axios.get(urlInjury)
export const createInjury = (newInjury) => axios.post(urlInjury, newInjury)
export const deleteInjury = (id) => axios.delete(urlInjury, id)
export const editInjury = (injury) => axios.put(urlInjury, injury)

export const fetchSchedule = () => axios.get(urlSchedule)
export const createSchedule = (newSchedule) => axios.post(urlSchedule, newSchedule)
export const deleteSchedule = (id) => axios.delete(urlSchedule, id)
export const editSchedule = (schedule) => axios.put(urlSchedule, schedule)
