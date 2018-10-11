import React, { Component } from "react";

class AddContact extends Component {
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input
                value={name}
                placeholder="Enter Name"
                name="name"
                type="text"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                value={email}
                placeholder="Enter Email"
                name="email"
                type="email"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Phone</label>
              <input
                value={phone}
                placeholder="Enter Phone"
                name="phone"
                type="text"
                className="form-control form-control-lg"
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
