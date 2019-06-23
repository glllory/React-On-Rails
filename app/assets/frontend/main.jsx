import React from "react";
import ReactDOM from 'react-dom';
import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

let mockTweets = [
    { id: 1, name: 'Majd Saleh', bodt: 'My #First Tweet' },
    { id: 2, name: 'Majd Saleh', bodt: 'My #Second Tweet' },
    { id: 3, name: 'Majd Saleh', bodt: 'My #Third Tweet' },
    { id: 4, name: 'Majd Saleh', bodt: 'My #Fourth Tweet' },
];

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <TweetBox />
                <TweetsList />
            </div>
        );
    }
}

let documentReady = () => {
    ReactDOM.render(<Main />, document.getElementById("react"));
}

$(documentReady);
