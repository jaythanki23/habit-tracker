import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_LOADED, AUTH_ERROR } from "../types";

const authReducer = (state, action) => {
  switch(action.type) {
    case USER_LOADED:
      return {
        ...state,
        token: localStorage.token,
        isAuthenticated: true,
        user: action.payload
      }

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:  
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        error: action.payload,
        user: null,
        isAuthenticated: false
      }
    default:
      return state;
  }
}

export default authReducer;