import {all} from 'redux-saga/effects';
import authSaga from './auth';
import fruitSaga from './fruit';

export default function* rootSaga() {
  yield all([authSaga(), fruitSaga()]);
}
