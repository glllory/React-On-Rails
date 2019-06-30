
import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">three</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Logo</a>
                        <ul className="hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            {/* Dropdown Trigger  */}
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                        <ul className="right hide-on-med-and-down">
                            <li>logout</li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}