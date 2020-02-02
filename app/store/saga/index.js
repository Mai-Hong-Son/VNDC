import auth from './auth';
import token from './token';
import {fork, all} from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    ...token.map(watcher => fork(watcher)),
    ...auth.map(watcher => fork(watcher)),
  ]);
}

export default rootSaga;
