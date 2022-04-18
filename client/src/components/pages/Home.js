import Dashboard from '../dashboard/Dashboard';
import AuthContext from '../../context/auth/authContext';
import { useContext, useEffect } from 'react';

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <div>
      <Dashboard />
    </div>
  )
}

export default Home