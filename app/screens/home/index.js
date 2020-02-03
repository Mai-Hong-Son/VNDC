import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import AppText from 'app/components/app_text';

class Home extends React.PureComponent {
  static navigationOptions = props => {
    return {
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 16}} onPress={() => null}>
          <Image
            resizeMode="cover"
            source={require('../../assets/images/icons/icon_menu.png')}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 16}} onPress={() => null}>
          <Image
            resizeMode="cover"
            source={require('../../assets/images/icons/icon_bell.png')}
          />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return (
      <View styles={styles.container}>
        <AppText>{'Home'}</AppText>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
