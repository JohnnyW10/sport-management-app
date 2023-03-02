import Finance from "../Pages/Finance";

export default (state = [], actions) => {
  switch(actions.type) {
    case 'FETCH_ALL_Finance': 
      return actions.payload;
    case 'Create_Finance': 
      return [Finance, actions.payload];
    case 'Delete_Finance': 
      return [...state, actions.payload];
    case 'Edit_Finance':
      return [...state, actions.payload];
    default:
      return state;
  }
}
 