import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    if (this.state.showContactInfo === true) {
      this.setState({
        showContactInfo: false
      });
    } else {
      this.setState({
        showContactInfo: true
      });
    }
  };
  // Delete button click handler
  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                <b>{contact.name}</b>{" "}
                <i
                  style={{
                    cursor: "pointer"
                  }}
                  onClick={this.onShowClick}
                  className="fas fa-sort-down pl-4 pr-3"
                />{" "}
                <span className="text-right">
                  <i
                    onClick={this.onDeleteClick.bind(
                      this,
                      contact.id,
                      dispatch
                    )}
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "tomato"
                    }}
                    className="fas fa-trash"
                  />
                </span>
              </h4>
              {showContactInfo ? (
                <ul className="list-group d-block">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
