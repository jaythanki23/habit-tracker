import { SET_STATUS, ADD_HABITS, REMOVE_HABITS, SET_DATE } from "../types";

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
      };
    case SET_DATE:
      return {
        ...state,
        day: action.payload.day,
        month: action.payload.month,
        date: action.payload.date
      }
    default:
      return state;
  }
}

export default habitReducer;