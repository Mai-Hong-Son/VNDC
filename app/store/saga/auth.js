import AuthAPI from '../api/auth';
import {updateTokens, removeIdentity, updateIdentity} from '../actions/auth';

import {createRequestSaga} from './common';
import {all, takeLatest} from 'redux-saga/effects';

const requestLogin = createRequestSaga({
  request: AuthAPI.login,
  success: [updateTokens, updateIdentity],
  error: [removeIdentity],
});

const requestRegister = createRequestSaga({
  request: AuthAPI.register,
});

const requestLoginViaFacebook = createRequestSaga({
  request: AuthAPI.loginViaFacebook,
  success: [updateTokens],
});

const requestLoginViaGoogle = createRequestSaga({
  request: AuthAPI.loginViaGoogle,
  success: [updateTokens],
});

export default [
  function* registerWatcher() {
    yield all([takeLatest('auth/register', requestRegister)]);
  },
  function* authenticateWatcher() {
    yield all([
      takeLatest('auth/login', requestLogin),
      takeLatest('auth/loginViaFacebook', requestLoginViaFacebook),
      // takeLatest('auth/forgotPasswordViaEmail', requestForgotPasswordViaEmail),
      takeLatest('auth/loginViaGoogle', requestLoginViaGoogle),
    ]);
  },

  // function* profileWatcher() {
  //   yield all([
  //     takeLatest('auth/update/user', requestUpdateUserInfo),
  //   ]);
  // },
];
