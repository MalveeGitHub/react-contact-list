import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup.js";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onChange = e => {
    const inputText = e.target.value;
    this.setState({
      [e.target.name]: inputText
    });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "" && email === "" && phone === "") {
      this.setState({
        error: {
          name: "Name is required!",
          email: "Email is required!",
          phone: "Phone is required!"
        }
      });
      return;
    } else if (name === "") {
      this.setState({
        ...this.state,
        error: { name: "Name is required!" }
      });
      return;
    } else if (email === "") {
      this.setState({
        email: "Email is required!"
      });
      return;
    } else if (phone === "") {
      this.setState({
        phone: "Phone is required!"
      });
      return;
    } else {
      const newContact = {
        name,
        email,
        phone
      };
      const id = this.props.match.params.id;

      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        newContact
      );

      dispatch({
        type: "UPDATE_CONTACT",
        payload: res.data
      });

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
              <div className="card-header">Edit Contact </div>
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
                    value="Update Contact"
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

export default EditContact;
