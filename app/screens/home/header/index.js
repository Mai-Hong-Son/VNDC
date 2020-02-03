import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = props => {
  return (
    <View styles={styles.container}>
      <Image source={require('../../../assets/images/icons/icon_menu.png')} />
      <Image source={require('../../../assets/images/icons/icon_bell.png')} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
