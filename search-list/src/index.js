import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

import "./styles.css";

import cards from "./cards.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: cards
    };
  }

  handleOnSearch(value) {
    const data = cards.filter(item => {
      const name = item.name.toLowerCase();
      return name.indexOf(value.toLowerCase()) > -1;
    });
    this.setState({
      data
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox handleOnSearch={this.handleOnSearch.bind(this)} />
        <CardList cards={this.state.data} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
