import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';

import actions from 'app/store/actions';
import platform from 'app/utils/platform';
import BoxRadius from 'app/components/box_radius';
import TextInputCustom from 'app/components/text_input';
import ButtonRadius from 'app/components/button_radius';
import {showAlertMessage} from 'app/utils/funcUtil';

@connect(
  null,
  {
    ...actions,
  },
)
class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'agencydemo',
      passWord: 'Ab123456@',
    };
  }

  onLogin = () => {
    const {userName, passWord} = this.state;

    if (!userName || !passWord) {
      showAlertMessage('Lỗi', 'Chưa nhập đủ thông tin!');
      return;
    }

    this.props.login({userName, passWord}, (err, data) => {
      if (data) {
        this.props.navigation.navigate('MainNavigation');
      } else if (err) {
        showAlertMessage('Lỗi', 'Tài khoản hoặc mật khẩu không đúng!');
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <BoxRadius style={styles.boxRadius}>
          <TextInputCustom
            iconUrl={require('../../assets/images/icons/icon_user.png')}
            title={'Email address'}
            placeholder={'Enter your email address'}
            onChangeText={userName => this.setState({userName})}
            value={this.state.userName}
          />
          <View style={{height: 22}} />
          <TextInputCustom
            iconUrl={require('../../assets/images/icons/icon_lock.png')}
            title={'Password'}
            placeholder={'Enter your password'}
            secureTextEntry={true}
            onChangeText={passWord => this.setState({passWord})}
            value={this.state.passWord}
          />
          <View style={{height: 50}} />
          <ButtonRadius title={'Sign In'} onPress={this.onLogin} />
          <View style={{height: 100}} />
          <Text style={styles.forgotPassword}>{'Forgot Password?'}</Text>
        </BoxRadius>
        <Text style={styles.signUpText}>
          {'Don’t have an account? '}
          <Text
            style={styles.forgotPassword}
            onPress={() => this.props.navigation.navigate('Register')}>
            {'Sign up'}
          </Text>
        </Text>
      </View>
    );
  }
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: platform.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  boxRadius: {
    paddingHorizontal: 21,
    paddingVertical: 25,
    alignItems: 'center',
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
});
