import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './components/Index';
import Follow from './components/Follow';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

let documentReady = () => {
    let reactNode = document.getElementById('react')
    if (reactNode) {
        ReactDOM.render(
            <Router>
                <App>
                    <Route exact path="/" component={Index} />
                    <Route path="/follow" component={Follow} />
                </App>
            </Router>
            , reactNode);
    }
};

$(documentReady);