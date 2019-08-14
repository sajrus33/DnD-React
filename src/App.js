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
        {
          txt: "List 4",
          id: "l4",
          items: [
            {
              txt: "item 7",
              id: "i7"
            },
            {
              txt: "item 8",
              id: "i8"
            }
          ]
        },
      ],

    }
  }
  dragStart = e => {
    e.dataTransfer.setData("key", e.target.id)
  }

  dragOver = e => {
    e.preventDefault();
  }

  drop = e => {
    const drop = e.target.id;
    const data = e.dataTransfer.getData("key");

    let lists = [...this.state.lists];

    if (data.slice(0, 1) === "l" && drop.slice(0, 1) == "l") {
      const indexs = lists.filter(list => list.id === data || list.id == drop);
      const i1 = lists.indexOf(indexs[0]);
      const i2 = lists.indexOf(indexs[1]);
      [lists[i1], lists[i2]] = [lists[i2], lists[i1]];

    } else if (data.slice(0, 1) === "i" && drop.slice(0, 1) == "i") {
      const items = lists
        .map(list => list.items)
        .flat()
        .filter(item => item.id === data || item.id == drop);
      const indexs = [];
      lists
        .forEach((list, iL) => list.items
          .forEach((item, iI) => {
            if (item.id == items[0].id || item.id == items[1].id) {
              indexs.push([iL, iI]);
            }
          }))
      const i1 = indexs[0];
      const i2 = indexs[1];
      [lists[i1[0]].items[i1[1]], lists[i2[0]].items[i2[1]]] = [lists[i2[0]].items[i2[1]], lists[i1[0]].items[i1[1]]]
    }
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
