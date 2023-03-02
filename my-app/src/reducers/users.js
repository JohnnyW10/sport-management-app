import UsersArrayView from "../Pages/Users";

export default (state = [], actions) => {
  switch(actions.type) {
    case 'FETCH_ALL': 
      return actions.payload;
    case 'CREATE': 
      return [UsersArrayView, actions.payload];
    case 'Edit_User':
      return [...state, actions.payload];
    default:
      return state;
  }
}
 