import React, { Component } from 'react';
import "./css/item.css"

class Item extends Component {
    render() {
        return (
            <a
                draggable={true}
                href="/#" className="item">{this.props.txt}
            </a>
        )
    }

}
Item.defaultProps = {
    txt: "Default text"
};
export default Item;
