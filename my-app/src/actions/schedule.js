import * as API from '../API'

 // Action creators - action creators which return actions
export const getSchedule = () => async (dispatch) => {
    // async (dispatch) is needed
    try {
      const { data } = await API.fetchSchedule();
      dispatch({ type: 'FETCH_ALL_SCHEDULE', payload: data})
    } catch (error) {
      console.error(error)
    }
}

export const createSchedule = (schedule) => async (dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.createSchedule(schedule)
    dispatch({ type: 'Create_Schedule ', payload: data})
  } catch (error) {
    console.error(error)
  }
}


export const deleteSchedule  = (schedule) => async(dispatch) => {
  // async (dispatch) is needed
  try {
    const { data } = await API.deleteSchedule(schedule)
    dispatch({ type: 'Delete_Schedule ', payload: data})
  } catch (error) {
    console.error(error)
  }
}

export const editSchedule  = (id, schedule) => async (dispatch) => {
  try {
    const { data } = await API.editSchedule({id, schedule})
    dispatch({ type: 'Edit_Schedule ', payload: data})
  } catch (error) {
    console.error(error)
  }
}

