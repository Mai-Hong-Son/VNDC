import React from 'react';
import {Text, StyleSheet} from 'react-native';
import platform from 'app/utils/platform';

const AppText = props => {
  const {children, style} = props;

  return <Text style={[styles.styleText, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  styleText: {
    color: platform.textColor,
  },
});
