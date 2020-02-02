import React from 'react';
import {View, TextInput, StyleSheet, Image, Text} from 'react-native';

import platform from 'app/utils/platform';

const TextInputCustom = props => {
  const {iconUrl, title} = props;

  return (
    <View style={styles.container}>
      <Image source={iconUrl} resizeMode={'cover'} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          {...props}
          placeholderTextColor={platform.placeholderColor}
          style={styles.contentInput}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 13,
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
    alignItems: 'center',
    width: '100%',
  },
  contentWrapper: {
    paddingLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 12,
    color: platform.placeholderColor,
  },
  contentInput: {
    fontSize: 14,
    color: platform.textColor,
    width: '100%',
  },
});
