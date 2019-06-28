import AppEventEmitter from './AppEventEmitter';
import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

let _tweets = [];

class TweetEventEmitter extends AppEventEmitter {

    getAll() {
        return _tweets.map(tweet => {
            tweet.formattedDate = moment(tweet.created_at).fromNow();
            return tweet;
        });
    }

}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {
    // action.actionType === RECEIVED_TWEETS
    switch (action.actionType) {
        case ActionTypes.RECEIVED_TWEETS:
            console.log(4, "TweetStore");
            _tweets = action.rawTweets;
            // emit a change event
            TweetStore.emitChange();
            break;
        case ActionTypes.RECEIVED_ONE_TWEET:
            console.log(4, "TweetStore");
            _tweets.unshift(action.rawTweet);
            // emit a change event
            TweetStore.emitChange();
            break;

        default:

    }

});

export default TweetStore;