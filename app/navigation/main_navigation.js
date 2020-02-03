import {createStackNavigator} from 'react-navigation-stack';

import Home from 'app/screens/home';
import platform from 'app/utils/platform';

const MainNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: '',
      }),
    },
  },
  {
    initialRouteName: 'Home',
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

export default MainNavigation;
