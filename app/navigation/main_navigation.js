import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Home from 'app/screens/home';
import AppDrawer from 'app/screens/drawer';

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    }),
  },
});

const MainNavigation = createDrawerNavigator({
  MainStack: {
    screen: MainStack,
  },
  AppDrawer: {
    screen: AppDrawer,
  },
});

export default MainNavigation;
