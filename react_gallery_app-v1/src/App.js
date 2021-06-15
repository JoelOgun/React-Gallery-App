import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import SearchForm from "./components/SearchForm";
import "./App.css";
import "./css/index.css";

import Nav from "./components/nav";
import SearchForm from "./components/SearchForm";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm />
          <Nav />

          {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              Cats Gif
            </Route>
            <Route exact path="/">
              Dogs
            </Route>
            <Route exact path="/">
              Birds
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
