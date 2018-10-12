import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  render() {
    return (
      <div>
        <h1 className="text-success">{this.state.title}</h1>
        <p className="text-danger">{this.state.body}</p>
      </div>
    );
  }
}

export default Test;
