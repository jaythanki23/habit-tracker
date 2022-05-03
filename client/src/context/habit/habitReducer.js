import { SET_STATUS, ADD_HABITS, REMOVE_HABITS, SET_DATE, ADD_USER_HABITS, GET_USER_HABITS, UPDATE_HABIT, HABIT_ERROR, SET_ERROR, CLEAR_ERROR } from "../types";

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
        date: action.payload.date,
        year: action.payload.year
      }
    case ADD_USER_HABITS:
      return {
        ...state,
        userHabits: action.payload
      }
    case GET_USER_HABITS:
      return {
        ...state,
        userHabits: action.payload["habits"],
        weekHabits: action.payload["weeks"]
      }
    case UPDATE_HABIT:
      return {
        ...state,
        userHabits: state.userHabits.map(habit => habit._id === action.payload._id ? action.payload : habit)
      }
    case HABIT_ERROR:
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

export default habitReducer;