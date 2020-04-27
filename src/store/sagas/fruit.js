import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as fruit from '~/services/firebase/fruit';
import {navigate} from '~/services/navigation';
import {Actions, Types} from '../ducks/fruit';

export function* createFruit({payload}) {
  try {
    yield call(fruit.add, payload.data);
    yield put(Actions.createFruitSuccess());
  } catch (err) {
    console.log('Erro criar fruta', err);
    yield put(Actions.createFruitError());
  }
}

export function* getFruits() {
  try {
    const fruits = yield call(fruit.list);
    yield put(Actions.getFruitsSuccess(fruits));
  } catch (err) {
    console.log('Erro ao buscar frutas', err);
    yield put(Actions.getFruitsError());
  }
}

export function* getCategories() {
  try {
    const categories = yield call(fruit.listCategories);
    yield put(Actions.getCategoriesSuccess(categories));
  } catch (err) {
    console.log('Erro ao buscar categorias', err);
    yield put(Actions.getCategoriesError());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(Types.CREATE_FRUIT_REQUEST, createFruit),
    takeLatest(Types.GET_FRUITS_REQUEST, getFruits),
    takeLatest(Types.GET_CATEGORIES_REQUEST, getCategories),
  ]);
}
