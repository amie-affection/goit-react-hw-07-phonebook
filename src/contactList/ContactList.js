import React, { Component } from "react";
import { connect } from "react-redux";
import OneContact from "../oneContact/OneContact";
import FilterContacts from "../filterContacts/FilterContacts";
import contactsOperations from "../redux/contacts/contactsOperations";

class ContactList extends Component {
  componentDidMount() {
    const { getAllContacts } = this.props;
    getAllContacts();
  }

  render() {
    const { contactList, filter, onChange } = this.props;

    return (
      <>
        <h2 style={{ marginLeft: "30px", color: "blue" }}>Contacts</h2>
        <FilterContacts filter={filter} onChange={onChange} />
        <ul>
          {contactList.map((contact) => (
            <OneContact id={contact.id} contact={contact} key={contact.id} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    contactList: state.contactRoot.contactReducer.filter((contact) =>
      contact.name
        .toLowerCase()
        .includes(state.contactRoot.filterReducer.toLowerCase())
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllContacts: () =>
      dispatch(contactsOperations.getAllContactsOperations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
