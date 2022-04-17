import { React, useContext } from 'react'
import DashboardHabits from './DashboardHabits';
import DisplayDate from './DisplayDate';
// import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
  // const { user } = useContext(AuthContext);


  return (
    <div>
      {/* <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.token}</h1> */}
      <DisplayDate />
      <DashboardHabits />
    </div>
  )
}

export default Dashboard