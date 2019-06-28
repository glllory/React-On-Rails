import AppEventEmitter from './AppEventEmitter';
import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

let _users = [];

class UserEventEmitter extends AppEventEmitter {

    getAll() {
        return _users;
    }

}

let UserStore = new UserEventEmitter();

AppDispatcher.register(action => {
    // action.actionType === RECEIVED_TWEETS
    switch (action.actionType) {
        case ActionTypes.RECEIVED_USERS:
            console.log(4, "UserStore");
            _users = action.rawUsers;
            // emit a change event
            UserStore.emitChange();
            break;

        // case ActionTypes.RECEIVED_TWEETS:
        //     console.log(4, "TweetStore");
        //     _tweets = action.rawTweets;
        //     // emit a change event
        //     TweetStore.emitChange();
        //     break;
        // case ActionTypes.RECEIVED_ONE_TWEET:
        //     console.log(4, "TweetStore");
        //     _tweets.unshift(action.rawTweet);
        //     // emit a change event
        //     TweetStore.emitChange();
        //     break;

        default:
    }

});

export default UserStore;