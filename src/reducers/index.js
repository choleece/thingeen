import { combineReducers } from 'redux-immutable';
import batchReducer from './batchReducer.js';
import logSlowReducers from './logSlowReducers.js';

import home from './home.js';
import personal from './personal.js';

let reducers = {
    home, personal
};

if(process.env.NODE_ENV === 'dev'){
    reducers = logSlowReducers(reducers, 1);
}
const rootReducer = combineReducers(reducers);
export default batchReducer(rootReducer);