import immutable from 'immutable';

import { UPDATE_USER_INFO } from "../constants/home";

let userInfo = {
    url: 'https://unsplash.it/250/305?image=883',
    userName: 'choleece',
    sex: '男',
    mobile: '17506482818',
    birthday: '1994-04-14',
    email: 'choleece@healai.com',
    address: '山东省青岛市市北区舞阳路51-2号'
};

let defaultStore = immutable.fromJS({userInfo});

export default function reducer(state = defaultStore, action) {
    switch (action.type) {
        case UPDATE_USER_INFO:
            let userInfo = state.get('userInfo').toJS();
            userInfo[action.payload.editCode] = action.payload[action.payload.editCode];
            return state.set('userInfo', immutable.fromJS(userInfo));
        default:
            return state;
    }
}
