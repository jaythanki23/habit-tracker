import { React, useContext, useEffect } from 'react'
import DashboardHabits from './DashboardHabits';
import DisplayDate from './DisplayDate';
import HabitContext from '../../context/habit/habitContext';

const Dashboard = () => {
  const { getHabit } = useContext(HabitContext);

  useEffect(() => {
    getHabit();
  }, []);


  return (
    <div>
      <DisplayDate />
      <DashboardHabits />
    </div>
  )
}

export default Dashboard