import React, { Component } from "react";

const Context = React.createContext();

// Reducer (State,Action)
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        name: "Jhone Doe",
        email: "deo@gmail.com",
        phone: "7777777",
        id: 1
      },
      {
        name: "Will Doe",
        email: "will@gmail.com",
        phone: "666666",
        id: 2
      },
      {
        name: "Henrey Doe",
        email: "Kenrey@gmail.com",
        phone: "888888",
        id: 3
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
