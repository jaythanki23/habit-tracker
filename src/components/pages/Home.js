import React from 'react';
import CheckboxForm from '../Form/CheckboxForm';
import Dashboard from '../UserDashboard/Dashboard';

const Home = () => {
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn ? <Dashboard />  : <CheckboxForm /> }
    </div>
  )
}

export default Home