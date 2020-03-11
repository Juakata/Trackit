import { combineReducers } from 'redux';
import auth from './auth';
import category from './category';
import goals from './goals';

const rootReducer = combineReducers({ auth, category, goals });

export default rootReducer;
