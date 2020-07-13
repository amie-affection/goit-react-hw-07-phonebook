import React from "react";
import { connect } from "react-redux";
import contactsAction from "../redux/contacts/contactsAction";
import styles from "./OneContact.module.css";

const OneContact = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        type="button"
        className={styles.btnDelete}
        onClick={deleteContact}
      >
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    deleteContact: () => dispatch(contactsAction.deleteContact(id)),
  };
};

export default connect(null, mapDispatchToProps)(OneContact);
