import {Alert} from 'react-native';

export const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
};

export const validatePhoneNumber = phone => {
  var re = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  return re.test(phone);
};

export const showAlertMessage = (title, message, action) => {
  Alert.alert(title, message, [
    {
      text: 'OK',
      onPress: () => {
        if (action) {
          action();
        }
      },
    },
  ]);
};
