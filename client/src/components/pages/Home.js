import React from 'react';
import Register from '../auth/Register';
import CheckboxForm from '../form/CheckboxForm';
import Dashboard from '../dashboard/Dashboard';
// import 

const Home = () => {
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn ? <Dashboard />  : <CheckboxForm /> }
      {/* <Register /> */}
    </div>
  )
}

export default Home