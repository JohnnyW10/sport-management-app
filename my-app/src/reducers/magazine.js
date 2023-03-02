import MagazineModal from "../Pages/MagazineModal";
import Item from '../components/MagazineModal/Item'

export default (state = [], actions) => {
  switch(actions.type) {
    case 'FETCH_ALL_Magazine': 
      return actions.payload;
    case 'Create_Magazine': 
      return [MagazineModal, Item, actions.payload];
    case 'Delete_Magazine':
      return [...state, actions.payload];
    case 'Edit_Magazine':
      return [...state, actions.payload];
    default:
      return state;
  }
}
 