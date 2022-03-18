import { React } from 'react'
import DashboardHabits from './DashboardHabits';
import Date from './TodayDate';

const Dashboard = () => {
  
  return (
    <div>
      <Date />
      <DashboardHabits />
    </div>
  )
}

export default Dashboard