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
          droppable: true,
          id: "l1",
          items: [
            { txt: "item 1" },
            { txt: "item 2" }
          ]
        },
        {
          txt: "List 2",
          droppable: true,
          id: "l2",
          items: [
            { txt: "item 1" },
            { txt: "item 2" }
          ]
        },
        {
          txt: "List 3",
          droppable: true,
          id: "l3",
          items: [
            { txt: "item 1" },
            { txt: "item 2" }
          ]
        },
      ],

    }
  }
  dragStart = e => {
    console.log("start drag");
    console.log(e.target.id);
    e.dataTransfer.setData("key", e.target.id)
  }

  dragOver = e => {
    console.log("drag over");
    e.preventDefault();
  }

  drop = e => {
    console.log("drop");
    console.log(e.target.id);
    const data = e.dataTransfer.getData("key");
    console.log(data);
    const newList = [...this.state.lists]
    const lists = this.state.lists.filter(list => {
      return list.id !== data
    });

    console.log(lists, this.state.lists);
    this.setState({
      lists: lists
    })

  }
  render() {
    let lists = this.state.lists.map((list, i) =>
      <List
        items={this.state.items}
        listDragStart={this.dragStart.bind(this)}
        listDragOver={this.dragOver.bind(this)}
        droppable={list.droppable}
        listDrop={this.drop.bind(this)}
        txt={list.txt} key={i} id={list.id} ></List>)

    return (
      <Board>
        {lists}
      </Board>
    )
  }

}

export default App;
