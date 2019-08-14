import React, { Component } from 'react';
import "./css/list.css";
import Card from "./Card";
import Item from "./Item"

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                { txt: "item 1" },
                { txt: "item 2" },
                { txt: "item 3" }
            ]
        }
    }

    render() {
        let items = this.state.items.map((item, i) => <Item txt={item.txt} key={i}></Item>)
        return (
            <div className="list--wrapper">
                <div className="list"
                    onDragOver={this.props.listDragOver}
                    onDrop={this.props.listDrop}
                    onDragStart={this.props.listDragStart}
                >
                    <div
                        draggable={true}

                        onDragStart={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        className="list__header">
                        <div className="list__header--target"></div>
                        <h2 className="list__h">{this.props.txt}</h2>
                        <div className="list__wrapper--menu">
                            <a href="/#" className="list__link--menu">
                                <div className="list__ico--menu">...</div>
                            </a>
                        </div>
                    </div>
                    <Card>
                        {items}
                    </Card>
                    <a href="/#" className="list__wrapper--create">
                        <span className="list__span list__span--plus">+</span>
                        <span className="list__span">Add another card</span>
                    </a>
                </div>
            </div>
        )
    }

}

export default List;
// .list--wrapper {
// .list {
// .list__header {
// .list__h{
// .list__wrapper--menu{
// .list__link--menu{
// .list__ico--menu{