import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;
if(process.env.NODE_ENV === 'dev'){
    store = createStore(reducer, composeWithDevTools(
        applyMiddleware(thunk)
    ));
} else{
    const finalCreateStore = applyMiddleware(thunk)(createStore);
    store = finalCreateStore(reducer);
}

export default store;
