import React, { Component } from "react";
import { Consumer } from "../../Context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup.js";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {}
  };

  onChange = e => {
    const inputText = e.target.value;
    this.setState({
      [e.target.name]: inputText
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name == "" && email == "" && phone == "") {
      this.setState({
        error: {
          name: "Name is required!",
          email: "Email is required!",
          phone: "Phone is required!"
        }
      });
      return;
    } else if (name == "") {
      this.setState({
        ...this.state,
        error: { name: "Name is required!" }
      });
      return;
    } else if (email == "") {
      this.setState({
        email: "Email is required!"
      });
      return;
    } else if (phone == "") {
      this.setState({
        phone: "Phone is required!"
      });
      return;
    } else {
      const newContact = {
        name,
        email,
        phone,
        id: uuid()
      };
      let action = {
        type: "ADD_CONTACT",
        payload: newContact
      };

      dispatch(action);

      this.setState({
        name: "",
        email: "",
        phone: "",
        error: {}
      });
      this.props.history.push("/");
    }
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter name"
                    type="text"
                    onChange={this.onChange}
                    error={this.state.error.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    value={email}
                    placeholder="Enter email"
                    type="email"
                    onChange={this.onChange}
                    error={this.state.error.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter Phone"
                    type="text"
                    onChange={this.onChange}
                    error={this.state.error.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
