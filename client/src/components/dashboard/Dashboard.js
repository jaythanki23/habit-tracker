import { React } from 'react'
import DashboardHabits from './DashboardHabits';
import CurrentDate from './CurrentDate';

const Dashboard = () => {
  
  return (
    <div>
      <CurrentDate />
      <DashboardHabits />
    </div>
  )
}

export default Dashboard