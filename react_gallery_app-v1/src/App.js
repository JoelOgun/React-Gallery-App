import React, { Component } from "react";

//import SearchForm from "./components/SearchForm";
import "./App.css";
import "./css/index.css";

import SearchForm from "./components/SearchForm";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Search App</h1>
        <p>This is a simple search app</p>
        <SearchForm />
        {/*<SearchForm /> */}
      </div>
    );
  }
}

export default App;
