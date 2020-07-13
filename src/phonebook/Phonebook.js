import React, { Component } from "react";
import { connect } from "react-redux";
import contactsAction from "../redux/contacts/contactsAction";
import styles from "./Phonebook.module.css";

class Phonebook extends Component {
  state = {
    contactName: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { contactName, number } = this.state;
    const { addContact } = this.props;

    this.setState({
      contactName: "",
      number: "",
    });
    addContact(contactName, number);
  };

  render() {
    // console.log(this.props);
    const { contactName, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} style={{ marginLeft: "30px" }}>
        <h2>Phonebook</h2>

        <input
          className={styles.inputName}
          type="text"
          name="contactName"
          value={contactName}
          onChange={this.handleChange}
          placeholder="Enter name..."
          required
        ></input>

        <input
          className={styles.inputNumber}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Number..."
          required
        ></input>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addContact: (name, number) =>
    dispatch(contactsAction.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Phonebook);
