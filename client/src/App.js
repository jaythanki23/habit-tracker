import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import HabitState from './context/habit/HabitState';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/routing/PrivateRoute';

// import HabitContext from './context/habit/habitContext';


import './App.css';


function App() {
  // const { setDateTime } = useContext(HabitContext);

  // useEffect(() => {
  //   setDateTime();
  // }, []);

  return (
    <AuthState>
      <HabitState>
        <Router>
          <div className='App'>
            <div className='container'>
              <Navbar />
              <Routes>
                <Route exact path='/' element={<PrivateRoute>
                                                  <Home />
                                                </PrivateRoute>} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/login' element={<Login />} />
              </Routes>
            </div>
          </div>
        </Router>
      </HabitState>
    </AuthState>
  );
}

export default App;
