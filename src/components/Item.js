import React, { Component } from 'react';
import "./css/item.css"

const Item = props => {
    return (
        <a
            draggable={true}
            onDragStart={props.dragStart}
            id={props.id}
            href="/#" className="item">{props.txt}
        </a>
    )
}

export default Item;
