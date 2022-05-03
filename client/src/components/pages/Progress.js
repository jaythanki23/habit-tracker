import React, { useContext } from 'react';
// import Plot from 'react-plotly.js';
import AuthContext from '../../context/auth/authContext';
import HabitContext from '../../context/habit/habitContext';
import Chart from '../Chart';


const Progress = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { month, weekHabits } = useContext(HabitContext);

  const curr = new Date();
  
  let first = curr.getDate() - curr.getDay() + 1;
  
  let firstDay = new Date(curr.setDate(first)).toUTCString();
  
  let lastDay = new Date(curr.setDate(curr.getDate()+6)).toUTCString();
    
  firstDay = parseInt(firstDay.slice(5, 7));

  lastDay = parseInt(lastDay.slice(5, 7));  

  return (
    isAuthenticated ? (
      <div className='container border border-dark mt-5 p-3 w-auto'>
        <div className='d-flex flex-column align-items-center justify-content-center gap-5 border border-dark'>
          <div className='fs-1'>{month} {firstDay} - {lastDay}</div>
          <div className='d-flex flex-column align-items-center justify-content-center gap-5'>
            {weekHabits.map(habit => <Chart key={habit._id} durationObj={habit.dayDuration} name={habit.name} />)}
          </div>
        </div>
      </div>
    ) : (<h1>Please Login first</h1>)
  );
}

export default Progress