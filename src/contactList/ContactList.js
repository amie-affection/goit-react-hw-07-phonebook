import React from "react";
import { connect } from "react-redux";
import OneContact from "../oneContact/OneContact";
import FilterContacts from "../filterContacts/FilterContacts";

const ContactList = ({ contactList, filter, onChange }) => {
  return (
    <>
      <h2 style={{ marginLeft: "30px" }}>Contacts</h2>
      <FilterContacts filter={filter} onChange={onChange} />
      <ul>
        {contactList.map((contact) => (
          <OneContact id={contact.id} contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

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

export default connect(mapStateToProps)(ContactList);
