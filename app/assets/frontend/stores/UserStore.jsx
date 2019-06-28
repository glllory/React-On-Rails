import AppEventEmitter from './AppEventEmitter';
import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

let _users = [];
let _followedIDs = [];

class UserEventEmitter extends AppEventEmitter {

    getAll() {
        return _users.map(user => {
            user.following = _followedIDs.indexOf(user.id) >= 0;
            return user;
        });
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
        case ActionTypes.RECEIVED_ONE_FOLLOWER:
            console.log(4, "UserStore");
            _followedIDs.push(action.rawFollower.user_id);
            // emit a change event
            UserStore.emitChange();
            break;

        default:
    }

});

export default UserStore;