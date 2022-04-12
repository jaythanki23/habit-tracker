import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types";

const authReducer = (state, action) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        user: null,
        isAutenticated: null
      }
    default:
      return state;
  }
}

export default authReducer;