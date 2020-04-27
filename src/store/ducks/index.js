import {combineReducers} from 'redux';
import auth from './auth';
import fruit from './fruit';

const reducers = combineReducers({
  auth, fruit
});

export default reducers;
