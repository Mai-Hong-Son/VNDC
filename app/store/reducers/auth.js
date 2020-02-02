const initialState = {
  tokens: {
    token: null,
    refreshToken: null,
    refreshing: false, // token is refreshing
  },
  isRefreshingToken: false,
  identity: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'auth/refreshingToken':
      return {
        ...state,
        isRefreshingToken: true,
      };
    case 'auth/refreshedToken':
      return {
        ...state,
        isRefreshingToken: false,
      };

    case 'auth/updateTokens': {
      const {token} = action.payload;

      return {
        ...state,
        isRefreshingToken: false,
        tokens: {
          token,
        },
      };
    }

    case 'auth/updateIdentity': {
      const {user} = action.payload;
      return {
        ...state,
        isRefreshingToken: false,
        identity: user,
      };
    }

    case 'auth/removeIdentity': {
      return {
        ...state,
        isRefreshingToken: false,
        tokens: {
          token: null,
          refreshToken: null,
        },
        identity: null,
      };
    }

    default:
      return state;
  }
};
