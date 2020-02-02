import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from 'app/components/app_text';

class AppDrawer extends React.PureComponent {
  render() {
    return (
      <View styles={styles.containter}>
        <AppText>{'Drawer'}</AppText>
      </View>
    );
  }
}

export default AppDrawer;

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  },
});
