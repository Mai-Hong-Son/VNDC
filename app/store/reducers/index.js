import {combineReducers} from 'redux';
import {locale, theme, navigator} from './common';
import auth from './auth';

export default combineReducers({
  auth,
  locale,
  theme,
  navigator,
});
