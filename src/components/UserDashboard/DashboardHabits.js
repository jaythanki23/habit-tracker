import { React, useContext } from 'react'
import HabitContext from '../../context/habitContext';
import Habit from './Habit';

const DashboardHabits = () => {
  const { habits } = useContext(HabitContext);

  const myHabits = habits.filter(habit => habit.status === true);

  return (
    <div className='center bn br3 w-70 vh-75 mt4 pa5 bg-white shadow-1'>
      {myHabits.map(habit => <Habit key={habit.name} name={habit.name} />)}
    </div>
  )
}

export default DashboardHabits