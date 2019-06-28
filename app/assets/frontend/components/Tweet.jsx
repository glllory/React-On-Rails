
import React from "react";

export default class Tweet extends React.Component {
    render() {
        return (
            <li className="collection-item avatar">
                <i className="material-icons circle">person</i>
                <span className="title">Majd Saleh</span>
                <p>My #firs tweet</p>
            </li>
        );
    }
}