import axios from "axios";
import { useReducer } from "react";
import HabitContext from "./habitContext";
import habitReducer from "./habitReducer";
import { SET_STATUS, ADD_HABITS, REMOVE_HABITS, SET_DATE, ADD_USER_HABITS, GET_USER_HABITS, UPDATE_HABIT, HABIT_ERROR, CLEAR_STATUS, SET_ERROR, CLEAR_ERROR } from "../types";


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
    dateTime: new Date(),
    error: null

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

  // Delete Habits
  const deleteHabit = (id) => {
    try {
      axios.delete(`/api/habits/${id}`);
      clearStatus();
      getHabit();
    } catch (error) {
      dispatch({
        type: HABIT_ERROR,
        payload: error.response.data.message
      });
    }
  };



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
  const postHabit = async (name) => {
    if(name) {
      state.habits.push({ name, status:true });
    }


    const habits = state.habits.filter(habit => habit.status === true).map(({ name }) => ({
      name,
      duration: [],
      dateTime: [],
      day: [],
      month: [],
      date: [],
    }));

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/habits', habits, config);

      // dispatch({
      //   type: ADD_USER_HABITS,
      //   payload: res.data
      // });

      clearStatus();
      getHabit();

    } catch (error) {
      dispatch({
        type: HABIT_ERROR,
        payload: error.response.data.message
      })
    }
  }

  // Get Habits
  const getHabit = async () => {
    try {
      const res = await axios.get('/api/habits');

      // res.data.forEach(habit => habit['isSubmitted'] = false);

      dispatch({
        type: GET_USER_HABITS,
        payload: res.data
      })
      
    } catch (error) {
      dispatch({
        type: HABIT_ERROR,
        payload: error.response.data.message
      })
    }
  }

  // Update Habit
  const updateHabit = async data => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const updatedHabit = {
      duration: parseInt(data.duration),
      day: state.day,
      month: state.month,
      date: parseInt(state.date),
      dateTime: state.dateTime
    }

    try {
      const res = await axios.put(`/api/habits/${data.id}`, updatedHabit, config)

      dispatch({
        type: UPDATE_HABIT,
        payload: res.data
      })

    } catch (error) {
      dispatch({
        type: HABIT_ERROR,
        payload: error.response.data.message
      })
    }
  }

  // clear status
  const clearStatus = () => {
    state.habits.forEach(habit => habit.status = false);
  }

  const setError = (msg) => {
    dispatch({ type: SET_ERROR, payload: msg });

    setTimeout(() => dispatch({ type: CLEAR_ERROR }), 5000);
  }

  return <HabitContext.Provider
    value={{
      habits: state.habits,
      userHabits: state.userHabits,
      day: state.day,
      month: state.month,
      date: state.date,
      dateTime: state.dateTime,
      error: state.error,
      setStatus,
      addHabit,
      setDateTime,
      postHabit,
      getHabit,
      updateHabit,
      deleteHabit,
      setError
    }}
  >
    {props.children}
  </HabitContext.Provider>
}

export default HabitState;