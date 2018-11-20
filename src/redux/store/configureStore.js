import { createStore, applyMiddleware } from 'redux';
//ReduxThunk middleware
import ReduxThunk from 'redux-thunk';
//the combined reducers
import combineReducers from '../reducers';

export default() => {
    //creating the Redux store with the combineReducers passed in
    const store = createStore(combineReducers, applyMiddleware(ReduxThunk));
    return store;
};

