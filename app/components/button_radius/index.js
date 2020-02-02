import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import platform from 'app/utils/platform';

const ButtonRadius = props => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity style={{width: '100%'}} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonRadius;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: platform.orangeColor,
    width: '100%',
    paddingVertical: 17,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
});
