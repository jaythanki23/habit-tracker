import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import Progress from './components/pages/Progress';

import HabitState from './context/habit/HabitState';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/routing/PrivateRoute';

import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

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
                <Route exact path='/progress' element={<Progress />} />
              </Routes>
            </div>
          </div>
        </Router>
      </HabitState>
    </AuthState>
  );
}

export default App;
