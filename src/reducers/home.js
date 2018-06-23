import immutable from 'immutable'
import { ADD_PAGE_INDEX, GEN_HARM_LIST } from "../constants/home";

let defaultState = immutable.fromJS({pageIndex: 0, hasMore: true});

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GEN_HARM_LIST:
            let harmList = state.get('harmList') || immutable.fromJS([]);
            return state.set('harmList', harmList.concat(immutable.fromJS(action.payload)));
        case ADD_PAGE_INDEX:
            return state.set('pageIndex', action.payload);
        default: {
            return state;
        }
    }
}