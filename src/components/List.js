import React from 'react';
import "./css/list.css";
import Card from "./Card";
import Item from "./Item"

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const List = props => {

    const items = props.items.map((item, i) => <Item dragStart={props.itemDragStart} txt={item.txt} key={i} id={item.id}></Item>)
    return (
        <div className="list--wrapper">
            <div className="list"
                id={props.id}
                draggable={true}
                onDragOver={props.listDragOver}
                onDrop={props.listDrop}
                onDragStart={props.listDragStart}
            >
                <div className="list__header">
                    <div className="list__header--target"></div>
                    <h2 className="list__h">{props.txt}</h2>
                    <div className="list__wrapper--menu">
                        <a href="/#" className="list__link--menu">
                            <div className="list__ico--menu"><i className="fas fa-ellipsis-h"></i></div>
                        </a>
                    </div>
                </div>
                <Card>
                    {items}
                </Card>
                <a href="/#" className="list__wrapper--create">
                    <span className="list__span list__span--plus"><i className="fas fa-plus"></i></span>
                    <span className="list__span">Add another card</span>
                </a>
            </div>
        </div>
    )
}


export default List;
