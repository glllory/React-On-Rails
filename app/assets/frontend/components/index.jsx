import React from 'react';
import { Link } from 'react-router';
import TweetBox from './TweetBox';
import TweetsList from './TweetsList';
import TweetStore from '..//stores/TweetStore';
import TweetActions from '../actions/TweetActions';


TweetActions.getAllTweets();

let getAppState = () => {
    return { tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this._onChange = this._onChange.bind(this);
    }
    // formattedTweets(tweetsList) {
    //     let formattedList = tweetsList.map(tweet => {
    //         tweet.formattedDate = moment(tweet.created_at).fromNow();
    //         return tweet;
    //     });
    //     return {
    //         tweetsList: formattedList
    //     };
    // }
    // addTweet(tweetToAdd) {
    //     $.post("/tweets", { body: tweetToAdd })
    //         .success(savedTweet => {
    //             let newTweetsList = this.state.tweetsList;
    //             newTweetsList.unshift(savedTweet);
    //             this.setState(this.formattedTweets(newTweetsList));
    //         })
    //         .error(error => console.log(error));
    // }
    componentDidMount() {
        TweetStore.addChangeListener(this._onChange);
        // $.ajax("/tweets")
        //     .success(data => this.setState(this.formattedTweets(data)))
        //     .error(error => console.log(error));
    }
    componentWillUnmount() {
        TweetStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        console.log(5, "Index._onChange");
        this.setState(getAppState());
    }
    render() {
        return (
            <div className="container">
                {/* <TweetBox sendTweet={this.addTweet.bind(this)} /> */}
                {/* <Link to="/follow">Who to follow</Link> */}
                <TweetBox />
                <TweetsList tweets={this.state.tweetsList} />
            </div>
        );
    }
}
