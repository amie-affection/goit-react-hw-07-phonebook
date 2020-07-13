import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Phonebook from "./phonebook/Phonebook";
import ContactList from "./contactList/ContactList";
import withTheme from "./hoc/withTheme";

class App extends Component {
  state = {
    filter: "",
    // name: "",
    // number: "",
  };

  componentDidMount() {
    const contactStorage = localStorage.getItem("contacts");
    if (contactStorage) {
      this.setState({ contacts: JSON.parse(contactStorage) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Submit");
  //   console.log(this.state);
  //   const contact = {
  //     id: uuidv4(),
  //     name: this.state.name,
  //     number: this.state.number,
  //   };
  //   this.state.contacts.find(
  //     ({ name }) => name === contact.name && contact.name
  //   )
  //     ? alert(`${contact.name} already exists`)
  //     : this.setState((prev) => {
  //         return {
  //           contacts: [...prev.contacts, contact],
  //         };
  //       });
  //   this.setState({ name: "", number: "" });
  // };

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(value);
  //   this.setState({ [name]: value });
  // };

  filterByName = () => {
    // return this.state.contacts.filter((contact) =>
    //   contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    // );
  };

  deleteContact = (id) => {
    // this.setState((prev) => {
    //   return {
    //     contacts: prev.contacts.filter((contact) => contact.id !== id),
    //   };
    // });
  };

  render() {
    const filterContact = this.filterByName();
    // console.log(filterContact);
    // console.log(this.props);
    const {
      themeConfig: { fontColor, bodybg },
    } = this.props;
    const { filter } = this.state;
    return (
      <div style={{ color: fontColor, background: bodybg }}>
        <button
          type="submit"
          style={{ marginLeft: "30px", marginTop: "30px" }}
          onClick={this.props.toggleTheme}
        >
          Change theme
        </button>
        <Phonebook
          // onSubmit={this.handleSubmit}
          // onChange={this.handleChange}
          name={this.state.name}
          number={this.state.number}
        />

        <ContactList
          filter={filter}
          // onChange={this.handleChange}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default withTheme(App);
