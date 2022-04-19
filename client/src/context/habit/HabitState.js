import axios from "axios";
import { useReducer } from "react";
import HabitContext from "./habitContext";
import habitReducer from "./habitReducer";
import { SET_STATUS, ADD_HABITS, REMOVE_HABITS, SET_DATE, ADD_USER_HABITS, HABIT_ERROR } from "../types";


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
    ],
    userHabits: [],
    day: null,
    month: null,
    date: null,
    dateTime: new Date()

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


  // set Current Date
  const setDateTime = (data) => {

    // Get date
    const d = new Date();
      
    // Get Day
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[d.getDay()];

    // Get Month
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const month = months[d.getMonth()];

    // Get Day of the month
    const date = d.getDate();

    console.log(month);
    
    dispatch({
      type: SET_DATE,
      payload: { day, month, date }
    })
  }


  // Post Habits
  const postHabit = async () => {
    const habits = state.habits.filter(habit => habit.status === true).map(({ name }) => ({
      name,
      duration: 0,
      dateTime: state.dateTime,
      day: state.day,
      month: state.month,
      date: state.date,
    }));

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/habits', habits, config);

      dispatch({
        type: ADD_USER_HABITS,
        payload: res.data
      });

    } catch (error) {
      dispatch({
        type: HABIT_ERROR,
        payload: error.response.data.message
      })
    }

  }

  return <HabitContext.Provider
    value={{
      habits: state.habits,
      userHabits: state.userHabits,
      day: state.day,
      month: state.month,
      date: state.date,
      dateTime: state.dateTime,
      setStatus,
      addHabit,
      setDateTime,
      postHabit
    }}
  >
    {props.children}
  </HabitContext.Provider>
}

export default HabitState;