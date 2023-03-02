import * as API from '../API'

 // Action creators - action creators which return actions
export const getMagazine = () => async (dispatch) => {
    // async (dispatch) is needed
    try {
      const { data } = await API.fetchMagazine();
      dispatch({ type: 'FETCH_ALL_Magazine', payload: data})
    } catch (error) {
      console.error(error)
    }
}

export const createMagazine = (magazine) => async (dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.createMagazine(magazine)
    dispatch({ type: 'Create_Magazine', payload: data})
  } catch (error) {
    console.error(error, 'tu')
  }
}

export const deleteMagazine = (magazine) => async (dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.deleteMagazine(magazine)
    dispatch({ type: 'Delete_Magazine', payload: data})
  } catch (error) {
    console.error(error)
  }
}

export const editMagazine = (id, magazine) => async (dispatch) => {
  try {
    const { data } = await API.editMagazine({id, magazine})
    dispatch({ type: 'Edit_Magazine', payload: data})
  } catch (error) {
    console.error(error)
  }
}

