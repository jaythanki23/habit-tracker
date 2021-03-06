import axios from 'axios';
import { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_LOADED, AUTH_ERROR } from '../types';


const AuthState = props => {
  const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
    error: null,
    loading: true
  }

  const [state, dispatch] = useReducer(authReducer, initialState);


  // Register user
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/users/register', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })

      loadUser();


    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.message
      })
    }
  }

  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/users/login', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })

      loadUser();

    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.message
      })
    }
  }

  // Logout
  const logout = () => { dispatch({ type: LOGOUT }) }

  // Load User
  const loadUser = async () => {
    if(localStorage.token) {
      setAuthToken(localStorage.token);
    }
    
    try {
      const res = await axios.get('/api/users/me');

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });

    } catch (error) {
      dispatch({
        type: AUTH_ERROR
      })
    }
  }


  return (
    <AuthContext.Provider 
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        loading: state.loading,
        register,
        login,
        logout,
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthState;