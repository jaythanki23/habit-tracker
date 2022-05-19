import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import Report from './components/pages/Report';

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
            <Navbar />
            <div className='container'>
              <Routes>
                <Route exact path='/' element={<PrivateRoute>
                                                  <Home />
                                                </PrivateRoute>} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/report' element={<PrivateRoute>
                                                        <Report />
                                                       </PrivateRoute>} />
              </Routes>
            </div>
          </div>
        </Router>
      </HabitState>
    </AuthState>
  );
}

export default App;
