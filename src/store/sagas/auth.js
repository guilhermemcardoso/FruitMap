import {call, put, all, takeLatest, fork} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import * as auth from '~/services/firebase/auth';
import * as user from '~/services/firebase/user';
import {navigate} from '~/services/navigation';
import {Actions, Types} from '../ducks/auth';

export function* sendCode({payload}) {
  try {
    const response = yield call(auth.sendCode, payload.data);
    yield put(Actions.sendCodeSuccess(response));
    navigate('CodeValidation');
  } catch (err) {
    console.log(err);
    yield put(Actions.sendCodeError());
  }
}

export function* validateCode({payload}) {
  try {
    const response = yield call(
      auth.validateCode,
      payload.data.validation,
      payload.data.code,
    );
    const userData = yield call(user.get, response.uid);

    if (userData)
      yield call(
        AsyncStorage.setItem,
        '@FRUITMAP:auth',
        JSON.stringify(userData),
      );

    navigate(userData ? 'Map' : 'Register');
    yield put(Actions.validateCodeSuccess(userData ? userData : response.uid));
  } catch (err) {
    console.log(err);
    yield put(Actions.validateCodeError());
  }
}

export function* getAuth() {
  try {
    const json = yield call(AsyncStorage.getItem, '@FRUITMAP:auth');
    const auth = JSON.parse(json);
    console.log('GET USER', auth);
    yield put(Actions.getAuthSuccess(auth));
    SplashScreen.hide();
  } catch (err) {
    console.log(err.response);
    yield put(Actions.getAuthError());
  }
}

export function* logout() {
  try {
    yield call(auth.logout);
    yield call(AsyncStorage.removeItem, '@FRUITMAP:auth');
    yield put(Actions.logoutSuccess());
    navigate('Login');
  } catch (err) {
    console.log(err);
    yield put(Actions.logoutError());
  }
}

export function* createUser({payload}) {
  try {
    const userData = {
        id: payload.data.uid,
        name: payload.data.name
    };
    yield call(user.createUser, userData);
    yield put(Actions.createUserSuccess(userData));
    yield call(
      AsyncStorage.setItem,
      '@FRUITMAP:auth',
      JSON.stringify(userData),
    );
    navigate('Map');
  } catch (err) {
    console.log(err);
    yield put(Actions.createUserError());
  }
}

export default function* rootSaga() {
  yield all([
    fork(getAuth),
    takeLatest(Types.SEND_CODE_REQUEST, sendCode),
    takeLatest(Types.VALIDATE_CODE_REQUEST, validateCode),
    takeLatest(Types.LOGOUT_REQUEST, logout),
    takeLatest(Types.CREATE_USER_REQUEST, createUser)
  ]);
}
