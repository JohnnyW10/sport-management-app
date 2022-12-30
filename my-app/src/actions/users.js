 import * as API from '../API'

 // Action creators - action creators which return actions
export const getUsers = () => async (dispatch) => {
    // async (dispatch) is needed
    try {
      const { data } = await API.fetchUsers();
      dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
      console.error(error)
    }
}

export const createUser = (user) => async (dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.createUser(user)
    dispatch({ type: 'Create', payload: data})
  } catch (error) {
    console.error(error)
  }
}

