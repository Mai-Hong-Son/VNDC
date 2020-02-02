import {createStackNavigator} from 'react-navigation-stack';

import SignIn from 'app/screens/sign_in';
import Register from 'app/screens/register';
import platform from 'app/utils/platform';

const AuthNavigation = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: null,
      },
    },
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: platform.backgroundColor,
        shadowColor: 'transparent',
      },
      headerBackTitleVisible: false,
      headerTintColor: platform.textColor,
    },
  },
);

export default AuthNavigation;
