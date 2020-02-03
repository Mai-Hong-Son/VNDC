import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {connect} from 'react-redux';

import actions from 'app/store/actions';
import platform from 'app/utils/platform';
import BoxRadius from 'app/components/box_radius';
import ButtonRadius from 'app/components/button_radius';
import {
  showAlertMessage,
  validateEmail,
  validatePhoneNumber,
} from 'app/utils/funcUtil';
import TextInputCustom from 'app/components/text_input';

@connect(
  null,
  {
    ...actions,
  },
)
class Register extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      username: null,
      email: null,
      phone: null,
    };
  }

  onSignUp = () => {
    const {name, username, email, phone} = this.state;

    if (!username || !email || !phone) {
      showAlertMessage('Lỗi', 'Chưa nhập đủ thông tin!');
      return;
    }

    if (!validateEmail(email)) {
      showAlertMessage('Lỗi', 'Email chưa đúng định dạng!');
      return;
    }

    if (!validatePhoneNumber(phone)) {
      showAlertMessage('Lỗi', 'Số điện thoại chưa đúng định dạng!');
      return;
    }

    this.props.register({name, email, phone}, (err, data) => {
      // console.warn(err, data);
      if (err) {
        let errorMessage = '';

        err.reason.properties.forEach(element => {
          errorMessage =
            errorMessage + (err.reason.propertyErrors[element][0] + '\n');
        });

        showAlertMessage('Lỗi', errorMessage);
      } else if (data) {
        showAlertMessage('Thành công', 'Đăng ký thành công', () =>
          this.props.navigation.goBack(),
        );
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Sign-up'}</Text>
        <BoxRadius style={styles.boxRadius}>
          <View style={styles.formWrapper}>
            <TextInputCustom
              iconUrl={require('../../assets/images/icons/icon_user.png')}
              title={'Full name'}
              placeholder={'Enter your fullname'}
              onChangeText={name => this.setState({name})}
              value={this.state.name}
            />
            <View style={{height: 22}} />
            <TextInputCustom
              iconUrl={require('../../assets/images/icons/icon_email.png')}
              title={'Email'}
              placeholder={'Enter your email address'}
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
            <View style={{height: 22}} />
            <TextInputCustom
              iconUrl={require('../../assets/images/icons/icon_phone.png')}
              title={'Phone'}
              placeholder={'Enter your phone number'}
              onChangeText={phone => this.setState({phone})}
              value={this.state.phone}
            />
            <View style={{height: 22}} />
            <View style={styles.boxItemWrapper}>
              <Image
                source={require('../../assets/images/icons/icon_info.png')}
                resizeMode={'cover'}
              />
              <View style={styles.infoWrapper}>
                <Text style={styles.noteTitle}>
                  {'By tapping sign-up allow, you agree to our'}
                </Text>
                <Text style={styles.buttonText}>{'Terms an Conditions'}</Text>
              </View>
            </View>
          </View>
          <ButtonRadius title={'Sign up'} onPress={this.onSignUp} />
        </BoxRadius>
        <Text style={styles.signUpText}>
          {'Already have account? '}
          <Text
            style={styles.forgotPassword}
            onPress={() => this.props.navigation.goBack()}>
            {'Sign in'}
          </Text>
        </Text>
      </View>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: platform.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 60,
    paddingTop: 25,
  },
  boxRadius: {
    paddingHorizontal: 21,
    paddingVertical: 35,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  forgotPassword: {
    fontSize: 14,
    color: platform.iconColor,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  signUpText: {
    fontSize: 14,
    color: platform.textColor,
    marginTop: 30,
  },
  title: {
    fontSize: 28,
    color: platform.textColor,
    width: '100%',
    marginBottom: 25,
  },
  formWrapper: {
    width: '100%',
  },
  boxItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoWrapper: {
    paddingLeft: 21,
  },
  noteTitle: {
    fontSize: 12,
    color: platform.placeholderColor,
  },
  buttonText: {
    fontSize: 12,
    color: platform.iconColor,
    marginTop: 5,
  },
});
