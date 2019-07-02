
import React from "react";

export default class SignIn extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey large center">

                        <div className="card-content white-text">
                            <span className="card-title">Sign In</span>
                            <form>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" className="validate" />
                                        <label for="first_name">Full Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" className="validate" />
                                        <label for="first_name">User Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="password" type="password" className="validate" />
                                        <label for="password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s6">
                                        <a className="waves-effect waves-light btn">Sign In</a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="card-action">
                            <div className="row">
                                <a href="#">This is a link</a>
                            </div>
                            <div className="row">
                                <a href="#">This is a link</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}