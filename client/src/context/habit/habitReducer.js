import { SET_STATUS, ADD_HABITS, REMOVE_HABITS } from "../types";

const habitReducer = (state, action) => {
  switch(action.type) {
    case SET_STATUS:
      return {
        ...state,
        habits: state.habits.map(habit => habit.name === action.payload.name ? action.payload : habit)
      };
    case ADD_HABITS:
      return {
        ...state,
        habits: [...state.habits, action.payload]
      }
    default:
      return state;
  }
}

export default habitReducer;