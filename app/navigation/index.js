import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigation from 'app/navigation/auth_navigation';
import MainNavigation from 'app/navigation/main_navigation';
import AuthLoading from 'app/screens/auth_loading';

const RootApp = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      AuthNavigation,
      MainNavigation,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default RootApp;
