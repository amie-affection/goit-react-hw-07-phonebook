import React from "react";
import { connect } from "react-redux";
import contactsOperations from "../redux/contacts/contactsOperations";
import styles from "./OneContact.module.css";

const OneContact = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li className={styles.oneContact}>
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
    deleteContact: () =>
      dispatch(contactsOperations.deleteContactOperations(id)),
  };
};

export default connect(null, mapDispatchToProps)(OneContact);
