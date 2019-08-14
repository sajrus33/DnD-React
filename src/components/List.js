import React, { Component, Fragment } from 'react';
import "./css/list.css"

class List extends Component {


    render() {
        return (
            <Fragment>
                <div className="list--wrapper">
                    <div className="list">
                        <div className="list__header">
                            <h2 className="list__h"></h2>
                            <div className="list__wrapper--menu">
                                <a href="/#" className="list__link--menu">
                                    <div className="list__ico--menu">...</div>
                                </a>
                            </div>
                        </div>
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