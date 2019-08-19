import React, { Component } from "react";
import "./components/css/reset.css";
import "./components/css/board.css";

import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedId: null,
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
        }
      ]
    };
  }

  dragStart = e => {
    this.setState({
      draggedId: e.target.id
    });
  };

  dragOver = e => {
    e.preventDefault();
  };

  drop = e => {
    const dropId = e.target.id;
    const dragId = this.state.draggedId;

    if (dropId !== dragId) {
      const [dragPrefixId] = dragId;
      const [dropPrefixId] = dropId;

      if (dragPrefixId === dropPrefixId) {
        const lists = [...this.state.lists];

        if (dragPrefixId === "l") {
          const dragListIndex = lists.findIndex((list) => list.id === dragId);
          const dropListIndex = lists.findIndex((list) => list.id === dropId);

          lists.splice(dragListIndex, 1, lists.splice(dropListIndex, 1, lists[dragListIndex])[0]);

        } else if (dragPrefixId === "i") {
          const [item1, item2] = lists
            .map(list => list.items)
            .flat()
            .filter(item => item.id === dragId || item.id === dropId);

          const indexes = [];
          lists.forEach((list, listIndex) =>
            list.items.forEach((item, itemIndex) => {
              if (item.id === item1.id || item.id === item2.id) {
                indexes.push([listIndex, itemIndex]);
              }
            })
          );
          const [[list1Index, item1Index], [list2Index, item2Index]] = indexes;

          lists[list1Index].items.splice(
            item1Index,
            1,
            lists[list2Index].items.splice(item2Index, 1, lists[list1Index].items[item1Index])[0]
          );
        }

        this.setState({
          lists: lists
        });
      }
    }
  };


  render() {



    return (
      <div className="board--wrapper">
        <div className="board">
          {
            this.state.lists.map((list, i) => (
              <List
                items={list.items}
                listDragStart={this.dragStart.bind(this)}
                listDragOver={this.dragOver.bind(this)}
                droppable={list.droppable}
                listDrop={this.drop.bind(this)}
                txt={list.txt}
                key={i}
                id={list.id}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
