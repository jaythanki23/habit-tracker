import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import HabitContext from '../../context/habit/habitContext';
import Chart from '../Chart';


const Progress = () => {
  const { loadUser } = useContext(AuthContext);
  const { month, weekHabits, getHabit, setDateTime } = useContext(HabitContext);

  useEffect(() => {
    loadUser();
    getHabit();
    setDateTime();
  }, []);

  const curr = new Date();
  
  let first = curr.getDate() - curr.getDay() + 1;
  
  let firstDay = new Date(curr.setDate(first)).toUTCString();
  
  let lastDay = new Date(curr.setDate(curr.getDate()+6)).toUTCString();
    
  firstDay = parseInt(firstDay.slice(5, 7));

  lastDay = parseInt(lastDay.slice(5, 7));  

  return (
    <div className='container mt-5 p-3 w-auto'>
      <div className='d-flex flex-column align-items-center justify-content-center gap-5'>
        <div className='fs-1'>{month} {firstDay} - {lastDay}</div>
        <div className='d-flex flex-column align-items-center justify-content-center gap-5'>
          {weekHabits.filter(habit => habit.hasOwnProperty('dayDuration')).map(habit => <Chart key={habit._id} durationObj={habit.dayDuration} name={habit.name} />)}
        </div>
      </div>
    </div>
    
  );
}

export default Progress