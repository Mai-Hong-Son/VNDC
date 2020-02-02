import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import platform from 'app/utils/platform';

@connect(
  state => {
    return {
      auth: state.auth,
    };
  },
  null,
)
class AuthLoading extends React.PureComponent {
  componentDidMount() {
    const {
      auth: {
        tokens: {token},
      },
      navigation,
    } = this.props;

    if (token) {
      navigation.navigate('MainNavigation');
    } else {
      navigation.navigate('AuthNavigation');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: platform.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
