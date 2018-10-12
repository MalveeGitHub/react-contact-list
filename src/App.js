import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//All Components are imported here

import Header from "./components/layout/Header.js";
import Contacts from "./components/contact/Contacts.js";
import { Provider } from "./Context.js";
import AddContact from "./components/contact/AddContact";
import EditContact from "./components/contact/EditContact";
import About from "./components/pages/About.js";
import NotFound from "./components/pages/NotFound.js";
import Test from "./components/test/Test";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/add-contact" component={AddContact} />
                <Route exact path="/edit-contact/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
