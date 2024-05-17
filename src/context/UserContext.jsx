import { createContext, useCallback, useEffect, useReducer, useMemo } from 'react';

// AWS Amplify
import { Auth } from 'aws-amplify';

var ActionType;
(function (ActionType) {
  ActionType['INITIALIZE'] = 'INITIALIZE';
  ActionType['LOGIN'] = 'LOGIN';
  ActionType['LOGOUT'] = 'LOGOUT';
})(ActionType || (ActionType = {}));

const initialUserState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  })
};

const reducer = (state, action) => (handlers[action.type]
  ? handlers[action.type](state, action)
  : state);

export const AuthContext = createContext({
  ...initialUserState,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  confirmSignUp: () => Promise.resolve(),
  resendSignUp: () => Promise.resolve(),
  forgotPassword: () => Promise.resolve(),
  forgotPasswordSubmit: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialUserState);

  const initialize = useCallback(async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();

      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: true,
          user: {
            id: user.sub,
            email: user.attributes.email,
            username: user.username,
            cognito_uuid: user.attributes.cognito_uuid,
          }
        }
      });
    } catch (error) {
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    }
  }, [dispatch]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const signIn = async ({ email, password }) => {
    try {
      await Auth.signIn(email, password);
      await initialize();
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      dispatch({ type: ActionType.LOGOUT });
    } catch (error) {
      throw error;
    }
  };

  const confirmSignUp = useCallback(async (username, code) => {
    await Auth.confirmSignUp(username, code);
  }, []);

  const resendSignUp = useCallback(async (username) => {
    await Auth.resendSignUp(username);
  }, []);

  const forgotPassword = useCallback(async (username) => {
    await Auth.forgotPassword(username);
  }, []);

  const forgotPasswordSubmit = useCallback(async (username, code, newPassword) => {
    await Auth.forgotPasswordSubmit(username, code, newPassword);
  }, []);

  const value = useMemo(() => ({
    ...state,
    signIn,
    signOut,
    confirmSignUp,
    resendSignUp,
    forgotPassword,
    forgotPasswordSubmit,
  }), [state, signIn, signOut, confirmSignUp, resendSignUp, forgotPassword, forgotPasswordSubmit]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;