import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as fruit from '~/services/firebase/fruit';
import {navigate} from '~/services/navigation';
import {Actions, Types} from '../ducks/fruit';

export function* createFruit({payload}) {
  try {
    yield call(fruit.createFruit, payload.data);
    yield put(Actions.createFruitSuccess());
    
  } catch (err) {
    console.log(err);
    yield put(Actions.createFruitError());
  }
}

export function* syncFruits({payload}) {
    try {
        
        yield put(Actions.syncFruitsSuccess(fruits));
    } catch (err) {
        yield put(Actions.syncFruitsError());
    }
}

export default function* rootSaga() {
  yield all([takeLatest(Types.CREATE_FRUIT_REQUEST, createUser)]);
}
