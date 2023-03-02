import AdminHome from "../components/HomePage/AdminHome";
import UserHome from "../components/HomePage/UserHome";

export default (state = [], actions) => {
  switch(actions.type) {
    case 'FETCH_ALL_CLUBS': 
    console.log('to', actions.payload)
      return actions.payload;
    case 'Create_Club': 
      return [AdminHome, UserHome, actions.payload];
    case 'Delete_Club': 
      return [...state, actions.payload];
    case 'Edit_Club': 
      return [...state, actions.payload];
    default:
      return state;
  }
}
 