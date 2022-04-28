import React, { useContext } from 'react';
// import Plot from 'react-plotly.js';
import AuthContext from '../../context/auth/authContext';
import HabitContext from '../../context/habit/habitContext';
import Chart from '../Chart';


const Progress = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { date, month, months, userHabits } = useContext(HabitContext);

  const monthObj = {
    'January': 31,
    'February': 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31
  };

  const curr = new Date();

  let firstDay = (curr.getDate() - curr.getDay()) + 1;

  let lastDay = firstDay + 6;

  let nextMonth = month;

  if(lastDay > monthObj[month]) {
    lastDay = lastDay - monthObj[month];
    nextMonth = months[months.indexOf(month) + 1];
  }

  return (
    isAuthenticated ? (
      <div className='container border border-dark mt-5 p-3 w-auto'>
        <div className='d-flex flex-column align-items-center justify-content-center gap-5 border border-dark'>
          <div className='fs-1'>{month} {firstDay} - {nextMonth} {lastDay}</div>
          <div className='d-flex flex-column align-items-center justify-content-center gap-5'>
            {userHabits.map(habit => <Chart key={habit._id} duration={habit.duration} date={habit.date} name={habit.name} firstDay={firstDay} />)}
          </div>
        </div>
      </div>
    ) : (<h1>Please Login first</h1>)
  );
}

export default Progress