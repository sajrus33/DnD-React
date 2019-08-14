import React, { Component, Fragment } from 'react';
import "./css/card.css"

class Card extends Component {


    render() {
        return (
            <Fragment>
                <div className="card">
                    {this.props.children}
                </div>
            </Fragment>
        )
    }

}

export default Card;
