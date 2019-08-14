import React, { Component, Fragment } from 'react';
import "./css/list.css";
import Card from "./Card";
import Item from "./Item"

class List extends Component {


    render() {
        return (
            <Fragment>
                <div className="list--wrapper">
                    <div className="list">
                        <div className="list__header">
                            <div className="list__header--target"></div>
                            <h2 className="list__h">Queue</h2>
                            <div className="list__wrapper--menu">
                                <a href="/#" className="list__link--menu">
                                    <div className="list__ico--menu">...</div>
                                </a>
                            </div>
                        </div>
                        <Card>
                            <Item></Item>
                        </Card>
                        <a href="/#" className="list__wrapper--create">
                            <span className="list__span list__span--plus">+</span>
                            <span className="list__span">Add another card</span>
                        </a>
                    </div>
                </div>
            </Fragment>
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