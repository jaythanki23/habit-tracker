import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";

const authReducer = (state, action) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:  
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        error: action.payload,
        user: null,
        isAuthenticated: false
      }
    default:
      return state;
  }
}

export default authReducer;