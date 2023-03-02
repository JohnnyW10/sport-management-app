import * as API from '../API'

 // Action creators - action creators which return actions
export const getInjury = () => async (dispatch) => {
    // async (dispatch) is needed
    try {
      const { data } = await API.fetchInjury();
      dispatch({ type: 'FETCH_ALL_Injury', payload: data})
    } catch (error) {
      console.error(error)
    }
}

export const createInjury = (injury) => async (dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.createInjury(injury)
    dispatch({ type: 'Create_Injury', payload: data})
  } catch (error) {
    console.error(error)
  }
}


export const deleteInjury = (injury) => async (dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.deleteInjury(injury)
    dispatch({ type: 'Delete_Injury', payload: data})
  } catch (error) {
    console.error(error)
  }
}

export const editInjury = (id, injury) => async (dispatch) => {
  try {
    const { data } = await API.editInjury({id, injury})
    dispatch({ type: 'Edit_Injury', payload: data})
  } catch (error) {
    console.error(error)
  }
}