import React, { Component, Fragment } from 'react';
import "./components/css/board.css";
import List from "./components/List";


class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Fragment>
        <div className="content">
          <div className="board--wrapper">
            <div className="board">
              <List></List>
              <List></List>
              <List></List>

            </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default App;
