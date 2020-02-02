export const login = ({userName, passWord}, ...etc) => ({
  type: 'auth/login',
  args: [
    {
      userName,
      passWord,
    },
    ...etc,
  ],
});

export const register = ({name, username, email, phone}, ...etc) => ({
  type: 'auth/register',
  args: [
    {
      name,
      username,
      email,
      phone,
    },
    ...etc,
  ],
});

export const loginViaFacebook = ({token}, ...etc) => ({
  type: 'auth/loginViaFacebook',
  args: [
    {
      token,
    },
    ...etc,
  ],
});

export const loginViaGoogle = ({token}) => ({
  type: 'auth/loginViaGoogle',
  args: [{token}],
});

// TOKEN

export const logout = () => ({
  type: 'auth/logout',
});

export const refreshToken = ({refreshToken}) => ({
  type: 'auth/refreshAccessToken',
  args: [{refreshToken}],
});

export const removeIdentity = () => ({
  type: 'auth/removeIdentity',
});

export const updateIdentity = data => ({
  type: 'auth/updateIdentity',
  payload: {
    user: data.user,
  },
});

export const updateTokens = data => ({
  type: 'auth/updateTokens',
  payload: {
    token: data.sessionToken,
  },
});

export const refreshingToken = () => ({
  type: 'auth/refreshingToken',
});

export const refreshedToken = () => ({
  type: 'auth/refreshedToken',
});
