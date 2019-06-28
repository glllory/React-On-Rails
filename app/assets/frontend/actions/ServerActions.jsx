import AppDispatcher from '../dispatcher'
import ActionType from '../constants'

export default {
    receivedTweets(rawTweets) {
        console.log(3, "ServerActions.receivedTweets");
        //AppDispatcher...
        AppDispatcher.dispatch({
            actionType: ActionType.RECEIVED_TWEETS,
            rawTweets
        })
    },
    receivedOneTweet(rawTweet) {
        console.log(3, "ServerActions.receivedTweet");
        //AppDispatcher...
        AppDispatcher.dispatch({
            actionType: ActionType.RECEIVED_ONE_TWEET,
            rawTweet
        })
    },
    receivedUsers(rawUsers) {
        console.log(3, "ServerActions.receivedUsers");
        //AppDispatcher...
        AppDispatcher.dispatch({
            actionType: ActionType.RECEIVED_USERS,
            rawUsers
        })
    },
    receivedOneFollower(rawFollower) {
        console.log(3, "ServerActions.receivedOneFollower");
        //AppDispatcher...
        AppDispatcher.dispatch({
            actionType: ActionType.RECEIVED_ONE_FOLLOWER,
            rawFollower
        })
    }
}