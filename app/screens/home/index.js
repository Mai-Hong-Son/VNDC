import React from 'react';
import {View, StyleSheet} from 'react-native';

import AppText from 'app/components/app_text';

class Home extends React.PureComponent {
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
