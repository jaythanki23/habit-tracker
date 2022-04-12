import { useReducer } from "react";
import HabitContext from "./habitContext";
import habitReducer from "./habitReducer";
import { SET_STATUS, ADD_HABITS, REMOVE_HABITS } from "../types";

const HabitState = props => {
  const initialState = {
    habits: [
      {
        name: 'workout',
        status: false
      },
      {
        name: 'meditation',
        status: false
      },
      {
        name: 'reading',
        status: false
      },
      {
        name: 'writing',
        status: false
      },
      {
        name: 'painting',
        status: false
      },
      {
        name: 'running',
        status: false
      },
      {
        name: 'journaling',
        status: false
      }
    ]
  }

  const [state, dispatch] = useReducer(habitReducer, initialState);

  // Set Status
  const setStatus = (name, status) => {
    dispatch({ type: SET_STATUS, payload: {name, status} });
  }

  // Add Habits
  const addHabit = (name) => {
    dispatch({ type: ADD_HABITS, payload: {name: name, status: true} })
  }

  // Remove Habits

  return <HabitContext.Provider
    value={{
      habits: state.habits,
      setStatus,
      addHabit
    }}
  >
    {props.children}
  </HabitContext.Provider>
}

export default HabitState;