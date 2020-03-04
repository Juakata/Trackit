import { combineReducers } from 'redux';
import auth from './auth';
import category from './category';

const rootReducer = combineReducers({ auth, category });

export default rootReducer;
