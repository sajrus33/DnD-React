import React, { Component } from 'react';
import "./components/css/reset.css";
import Board from "./components/Board";
import List from "./components/List";



class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Board>
        <List></List>
        <List></List>
        <List></List>
      </Board>
    )
  }

}

export default App;
