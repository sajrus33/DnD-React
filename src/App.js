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
    this.draggedId = null;

  }

  dragStart = e => {
    this.draggedId = e.target.id
  }

  dragOver = e => {
    e.preventDefault();
  }

  drop = e => {
    const dropId = e.target.id;
    const dragId = this.draggedId;

    if (dropId !== dragId) {
      const [dragPrefixId,] = dragId;
      const [dropPrefixId,] = dropId;

      if (dragPrefixId === dropPrefixId) {
        const lists = [...this.state.lists];

        if (dragPrefixId === "l") {
          const indexes = lists.filter(list => list.id === dragId || list.id === dropId);
          const i1 = lists.indexOf(indexes[0]);
          const i2 = lists.indexOf(indexes[1]);
          lists.splice(i2, 1, lists.splice(i1, 1, lists[i2])[0]);

        } else if (dragPrefixId === "i") {
          const items = lists
            .map(list => list.items)
            .flat()
            .filter(item => item.id === dragId || item.id === dropId);

          const indexes = [];
          lists.forEach((list, iL) =>
            list.items.forEach((item, iI) => {
              if (item.id === items[0].id || item.id === items[1].id) {
                indexes.push([iL, iI]);
              }
            }))
          const [[iL1, iI1], [iL2, iI2]] = indexes;

          lists[iL1].items.splice(iI1, 1, lists[iL2].items.splice(iI2, 1, lists[iL1].items[iI1])[0]);
        }

        this.setState({
          lists: lists
        })
      }

    }
  }
  render() {
    let lists = this.state.lists.map((list, i) =>
      (<List
        items={list.items}
        listDragStart={this.dragStart.bind(this)}
        listDragOver={this.dragOver.bind(this)}
        droppable={list.droppable}
        listDrop={this.drop.bind(this)}
        txt={list.txt} key={i} id={list.id} >
      </List>))

    return (
      <Board>
        {lists}
      </Board>
    )
  }
}

export default App;
