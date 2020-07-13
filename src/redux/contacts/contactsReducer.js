import { combineReducers } from "redux";
import contactsType from "./contactsType";

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case contactsType.ADD_CONTACT:
      return [...state, action.payload.contact];

    case contactsType.DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case contactsType.FILTER_CONTACT:
      return action.payload.name;
    
    default:
      return state;
  }
}

export default combineReducers({
  contactReducer: contactReducer,
  filterReducer: filterReducer,
});
