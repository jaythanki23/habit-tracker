import { React, useContext } from 'react'
import HabitContext from '../../context/habitContext';
import Habit from './Habit';

const DashboardHabits = () => {
  const { habits } = useContext(HabitContext);

  const myHabits = habits.filter(habit => habit.status === true);

  return (
    <div className='center bn br3 w-70 vh-75 mt5 pa5 bg-white shadow-1'>
      <table>
        <thead>
          <tr>
            <th>Habit</th>
            <th>Completion</th>
            <th>Duration (in mins)</th>
          </tr>
        </thead>
        <tbody>
          {myHabits.map(habit => <Habit key={habit.name} name={habit.name} />)}
        </tbody>
      </table>
    </div>
  )
}

export default DashboardHabits