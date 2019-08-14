import React, { Component } from 'react';
import "./components/css/reset.css";
import Board from "./components/Board";
import List from "./components/List";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [
        { txt: "List 1" },
        { txt: "List 2" },
        { txt: "List 3" },
      ]
    }

    this.list = {
      dragStart: e => {
        e.stopPropagation();
        console.log(e.target)
      },
      dragOver: e => {
        e.preventDefault();

        e.dataTransfer.setData("text", e.target.id);
        e.dataTransfer.dropEffect = 'move';
        // console.log(e.target)
      },
      drop: e => {
        console.log(e.target)
      }
    }


  }

  render() {
    let lists = this.state.lists.map((list, i) => <List
      listDragStart={this.list.dragStart.bind(this)}
      listDragOver={this.list.dragOver.bind(this)}
      listDrop={this.list.drop.bind(this)}

      txt={list.txt} key={i} id={i} ></List>)
    return (
      <Board>
        {lists}
      </Board>
    )
  }

}

export default App;
