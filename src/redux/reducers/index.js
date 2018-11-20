import { combineReducers } from 'redux';

//importing the reducers
import userReducer from './userReducer';

//setting the stores combined reducers and exporting
export default combineReducers({
    userReducer
});
