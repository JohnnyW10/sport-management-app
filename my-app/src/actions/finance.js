import * as API from '../API'

 // Action creators - action creators which return actions
export const getFinance = () => async (dispatch) => {
    // async (dispatch) is needed
    try {
      const { data } = await API.fetchFinance();
      dispatch({ type: 'FETCH_ALL_Finance', payload: data})
    } catch (error) {
      console.error(error)
    }
}

export const createFinance = (finance) => async (dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.createFinance(finance)
    dispatch({ type: 'Create_Finance', payload: data})
  } catch (error) {
    console.error(error)
  }
}


export const deleteFinance = (finance) => async (dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.deleteFinance(finance)
    dispatch({ type: 'Delete_Finance', payload: data})
  } catch (error) {
    console.error(error)
  }
}


export const editFinance = (id, finance) => async (dispatch) => {
  try {
    const { data } = await API.editFinance({id, finance})
    dispatch({ type: 'Edit_Finance', payload: data})
  } catch (error) {
    console.error(error)
  }
}