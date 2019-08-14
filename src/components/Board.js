import React, { Component, Fragment } from 'react';
import "./css/board.css";

const Board = props => {


    return (
        <Fragment>
            <div className="board--wrapper">
                <div className="board">
                    {props.children}
                </div>
            </div>
        </Fragment>
    )

}

export default Board;
