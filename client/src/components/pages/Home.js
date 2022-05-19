import Dashboard from '../dashboard/Dashboard';
import AuthContext from '../../context/auth/authContext';
import HabitContext from '../../context/habit/habitContext';
import { useContext, useEffect } from 'react';

const Home = () => {
  const { loadUser } = useContext(AuthContext);
  const { setDateTime } = useContext(HabitContext);

  useEffect(() => {
    loadUser();
    setDateTime();
  }, []);

  return (
    <div>
      <Dashboard />
      {/* <div className='mt-5'>Visit the progress section of the page to view your progress this week</div> */}
    </div>
  )
}

export default Home