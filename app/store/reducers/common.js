import {Dimensions} from 'react-native';

const standard = {
  Button: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    borderRadius: 4,
    paddingHorizontal: 15,
  },
  Text: {
    color: '#000',
  },
  Header: {
    backgroundColor: 'red',
    // platform.navigationBg,
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
  },
};

// I18N
export const locale = (state = 'vi', {type, payload}) => {
  switch (type) {
    case 'app/changeLanguage':
      return payload.data;
    default:
      return state;
  }
};

// Theme
export const theme = (
  state = {
    theme: standard,
    toggleTheme: () => {},
  },
  {type, payload},
) => {
  switch (type) {
    case 'app/changeTheme':
      return {...state, theme: payload};
    case 'app/applyThemeFunction':
      return {...state, toggleTheme: payload};
    default:
      return state;
  }
};

export const navigator = (
  state = {
    current: null,
    before: null,
  },
  {type, payload},
) => {
  switch (type) {
    case 'nav/changed':
      const lastCurrent = state.current;

      if (lastCurrent === payload) {
        return state;
      }

      return {
        before: lastCurrent,
        current: payload,
      };
    default:
      return state;
  }
};
