import axios from 'axios';
import { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../types';


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
      'Content-type': 'application/json'
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
        payload: error.response.data.msg
      })
    }
  }


  return (
    <AuthContext.Provider 
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        register
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthState;