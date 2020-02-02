import React from 'react';
import {StatusBar, View} from 'react-native';

import RootApp from 'app/navigation';

class VNDC extends React.PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <RootApp />
      </View>
    );
  }
}

export default VNDC;
