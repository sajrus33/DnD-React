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
            {
              txt: "item 1",
              id: "i1"
            },
            {
              txt: "item 2",
              id: "i2"
            }
          ]
        },
        {
          txt: "List 2",
          droppable: true,
          id: "l2",
          items: [
            {
              txt: "item 3",
              id: "i3"
            },
            {
              txt: "item 4",
              id: "i4"
            }
          ]
        },
        {
          txt: "List 3",
          droppable: true,
          id: "l3",
          items: [
            {
              txt: "item 5",
              id: "i5"
            },
            {
              txt: "item 6",
              id: "i6"
            }
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
    const drop = e.target.id;
    const data = e.dataTransfer.getData("key");

    let lists = [...this.state.lists];
    const ele1 = lists.filter(list => list.id === data || list.id == drop);
    const i1 = lists.indexOf(ele1[0]);
    const i2 = lists.indexOf(ele1[1]);

    [lists[i1], lists[i2]] = [lists[i2], lists[i1]];
    console.log(lists);

    this.setState({
      lists: lists
    })

  }
  render() {
    let lists = this.state.lists.map((list, i) =>
      <List
        items={list.items}
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
