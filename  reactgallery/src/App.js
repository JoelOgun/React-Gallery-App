import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
//import SearchForm from "./components/SearchForm";
import "./App.css";
import "./css/index.css";
import Nav from "./components/nav";
import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";

//import Apikeys
const apiKey = process.env.REACT_APP_Flickr_API_KEY;
console.log(apiKey);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      garifuna: [],
      cats: [],
      dogs: [],
      computers: [],
      loading: true,
      searchText: "",
    };
  }

  componentDidMount() {
    this.catSearch();
    this.dogSearch();
    this.computerSearch();
    this.garifunaDefault();
  }

  performSearch = (query = this.search) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          search: response.data.photos.photo,
          loading: true,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };
  garifunaDefault = (query = "garifuna") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          garifuna: response.data.photos.photo,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  catSearch = (query = "Cats") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          cats: response.data.photos.photo,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  dogSearch = (query = "Dogs") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          dogs: response.data.photos.photo,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  computerSearch = (query = "Computers") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          computers: response.data.photos.photo,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <Router basename="/react-gallery-app-v1">
        <div className="container">
          <SearchForm query={this.state.query} onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Gallery
                  data={this.state.garifuna}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              exact
              path={"/search/:query"}
              render={() => (
                <Gallery
                  data={this.state.search}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              exact
              path="/cats"
              render={() => (
                <Gallery data={this.state.cats} loading={this.state.loading} />
              )}
            />
            <Route
              exact
              path="/dogs"
              render={() => (
                <Gallery data={this.state.dogs} loading={this.state.loading} />
              )}
            />
            <Route
              exact
              path="/computers"
              render={() => (
                <Gallery
                  data={this.state.computers}
                  loading={this.state.loading}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
