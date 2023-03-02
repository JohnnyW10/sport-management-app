import Schedule from "../Pages/Schedule";

export default (state = [], actions) => {
  switch(actions.type) {
    case 'FETCH_ALL_SCHEDULE': 
      return actions.payload;
    case 'Create_Schedule': 
      return [Schedule, actions.payload];
    case 'Delete_Schedule': 
      return [...state, actions.payload];
    case 'Edit_Schedule': 
      return [...state, actions.payload];
    default:
      return state;
  }
}
 