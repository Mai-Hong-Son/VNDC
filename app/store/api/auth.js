import {API, withToken} from './common';

function authenticateUser(user, password) {
  var token = user + ':' + password;

  // Should i be encoding this value????? does it matter???
  // Base64 Encoding -> btoa
  var hash = btoa(token);

  return 'Basic ' + hash;
}

export default {
  login: ({userName, passWord}) =>
    API.post(
      '/auth/session',
      {},
      {
        headers: {
          Authorization: authenticateUser(userName, passWord),
        },
      },
    ),

  register: ({name, username, email, phone}) =>
    API.post(
      '/users',
      {
        name,
        username,
        email,
        customValues: {
          referrer: 'gb.huynhanhtan@gmail.com',
        },
        group: 'customers_notverify',
        mobilePhones: [
          {
            name: 'Phone',
            number: phone.startsWith('0') ? '+84' + phone.substring(1) : phone,
            hidden: true,
            enabledForSms: true,
            verified: true,
            kind: 'mobile',
          },
        ],
        skipActivationEmail: true,
        acceptAgreement: true,
        asMember: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ),

  changePassword: (
    token,
    {new_password: newPassword, old_password: oldPassword},
  ) =>
    API.post(
      'auth/change-password',
      {
        newPassword,
        oldPassword,
      },
      withToken(token),
    ),

  loginViaFacebook: ({token}) => API.get('auth/facebook', {}, withToken(token)),

  loginViaGoogle: ({token}) => API.get('auth/google', {}, withToken(token)),

  logout: ({refreshToken}) =>
    API.put('auth/logout', {
      refreshToken,
    }),

  refreshAccessToken: ({refreshToken}) =>
    API.post('auth/refresh', {
      refreshToken,
    }),

  forgotPasswordViaEmail: ({email}) =>
    API.post('auth/forgot-password', {email}),
};
