import React from 'react';
import "./css/board.css";

const Board = props => {
    return (
        <div className="board--wrapper">
            <div className="board">
                {props.children}
            </div>
        </div>
    )
}

export default Board;
