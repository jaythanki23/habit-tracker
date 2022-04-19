import { SET_STATUS, ADD_HABITS, REMOVE_HABITS, SET_DATE, ADD_USER_HABITS, HABIT_ERROR } from "../types";

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
    case ADD_USER_HABITS:
      return {
        ...state,
        userHabits: action.payload
      }
    default:
      return state;
  }
}

export default habitReducer;