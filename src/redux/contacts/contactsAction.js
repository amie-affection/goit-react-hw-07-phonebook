import contactsType from "./contactsType";

const addContact = (name, number) => ({
  type: contactsType.ADD_CONTACT,

  payload: {
    contact: {
      id: Date.now(),
      name,
      number,
    },
  },
});

const deleteContact = (idContactDelete) => ({
  type: contactsType.DELETE_CONTACT,

  payload: { id: idContactDelete },
});

const filterContact = (nameContact) => ({
  type: contactsType.FILTER_CONTACT,

  payload: {
    name: nameContact,
  },
});

export default {
  addContact,
  deleteContact,
  filterContact,
};
