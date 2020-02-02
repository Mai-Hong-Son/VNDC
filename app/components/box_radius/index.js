import React from 'react';
import {View, StyleSheet} from 'react-native';

const BoxRadius = props => {
  const {children, style} = props;

  return <View style={[styles.container, style]}>{children}</View>;
};

export default BoxRadius;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#243042',
    width: '100%',
  },
});
