import React, { Component } from 'react';
import "./components/css/reset.css";
import Board from "./components/Board";
import List from "./components/List";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [
        {
          txt: "List 1",
          droppable: false
        },
        {
          txt: "List 2",
          droppable: true
        },
        {
          txt: "List 3",
          droppable: false
        },
      ]
    }

    this.lists = {
      dragStart: e => {
        console.log(e.target.id);
        e.dataTransfer.allowEffect = 'move';
      },

      dragOver: e => {
        e.preventDefault();
      },

      drop: e => {
        console.log(e.target);
        const data = e.dataTransfer.getData("key");
        console.log(data)
        document.querySelectorAll(`[data-key~="${data}"]`);
      }
    }

    this.items = {
      dragStart: e => {
        console.log(e.target.id, "i am item");
        e.dataTransfer.dropEffect = 'move';
      },

      dragOver: e => {
        e.preventDefault();
      },

      drop: e => {
        console.log(e.target);
        const data = e.dataTransfer.getData("key");
        console.log(data)
        document.querySelectorAll(`[data-key~="${data}"]`);
      }
    }

  }

  render() {
    let lists = this.state.lists.map((list, i) =>
      <List
        listDragStart={this.lists.dragStart.bind(this)}
        listDragOver={this.lists.dragOver.bind(this)}
        droppable={list.droppable}
        listDrop={this.lists.drop.bind(this)}
        txt={list.txt} key={i} id={"list" + i} ></List>)

    return (
      <Board>
        {lists}
      </Board>
    )
  }

}

export default App;
