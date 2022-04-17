import axios from 'axios';
import { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types';


const AuthState = props => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    error: null
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
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.message
      })
    }
  }

  // Logout
  const logout = () => { dispatch({ type: LOGOUT }) }



  return (
    <AuthContext.Provider 
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        register,
        login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthState;