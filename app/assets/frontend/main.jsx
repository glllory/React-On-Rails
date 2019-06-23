import React from "react";
import ReactDOM from 'react-dom';
import TweetBox from './components/TweetBox';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <TweetBox />
            </div>
        );
    }
}

let documentReady = () => {
    ReactDOM.render(<Main />, document.getElementById("react"));
}

$(documentReady);
