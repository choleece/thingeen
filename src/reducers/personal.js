import immutable from 'immutable';

import {INIT_USER_INFO, UPDATE_USER_INFO} from "../constants/home";

let userInfo = {};

let defaultStore = immutable.fromJS({userInfo});

export default function reducer(state = defaultStore, action) {
    switch (action.type) {
        case INIT_USER_INFO:
            return state.set('userInfo', immutable.fromJS(action.payload));
        case UPDATE_USER_INFO:
            let userInfo = state.get('userInfo').toJS();
            userInfo[action.payload.editCode] = action.payload[action.payload.editCode];
            return state.set('userInfo', immutable.fromJS(userInfo));
        default:
            return state;
    }
}
