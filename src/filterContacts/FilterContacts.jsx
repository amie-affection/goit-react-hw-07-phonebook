import React from "react";
import { connect } from "react-redux";
import contactsAction from "../redux/contacts/contactsAction";

const FilterContacts = ({ filter, onChange }) => {
  console.log(filter);
  return (
    <>
      <p style={{ marginLeft: "30px" }}>Find contacts by name</p>
      <input
        style={{ marginLeft: "30px" }}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.contactRoot.filterReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch(contactsAction.filterContact(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
