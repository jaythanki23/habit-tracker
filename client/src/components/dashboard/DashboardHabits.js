import { React, useContext } from 'react'
import HabitContext from '../../context/habit/habitContext';
import Habit from './Habit';

const DashboardHabits = () => {
  const { userHabits } = useContext(HabitContext);

  // const myHabits = habits.filter(habit => habit.status === true);

  return (
    <div className='m-4 p-4'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Habit</th>
            <th scope='col'>Completion</th>
            <th scope='col'>Duration (in mins)</th>
          </tr>
        </thead>
        <tbody>
          {userHabits.map(habit => <Habit key={habit._id} id={habit._id} name={habit.name} />)}
        </tbody>
      </table>
      {/* <button className='btn btn-primary'>Add one more?</button> */}
    </div>
  )
}

export default DashboardHabits