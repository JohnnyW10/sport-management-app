import * as API from '../API'

 // Action creators - action creators which return actions
export const getClub = () => async (dispatch) => {
    // async (dispatch) is needed
    try {
      const { data } = await API.fetchClubs();
      dispatch({ type: 'FETCH_ALL_CLUBS', payload: data})
    } catch (error) {
      console.error(error)
    }
}

export const createClub = (club) => async (dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.createClubs(club)
    dispatch({ type: 'Create_Club', payload: data})
  } catch (error) {
    console.error(error)
  }
}


export const deleteClub = (club) => async (dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.deleteClub(club)
    dispatch({ type: 'Delete_Club', payload: data})
  } catch (error) {
    console.error(error)
  }
}

export const editClub = (id, club) => async (dispatch) => {
  try {
    const { data } = await API.editClub({id, club})
    dispatch({ type: 'Edit_Club', payload: data})
  } catch (error) {
    console.error(error)
  }
}

