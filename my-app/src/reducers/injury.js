import MedicalModal from "../Pages/MedicalModal";

export default (state = [], actions) => {
  switch(actions.type) {
    case 'FETCH_ALL_Injury': 
      return actions.payload;
    case 'Create_Injury': 
      return [MedicalModal, actions.payload];
    case 'Delete_Injury': 
      return [...state, actions.payload];
    case 'Edit_Injury':
      return [...state, actions.payload];
    default:
      return state;
  }
}