import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import HabitState from './context/HabitState';

import './App.css';

function App() {
  return (
    <HabitState>
      <Router>
        <div className='App'>
          <div className='container'>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    </HabitState>
    
  );
}

export default App;
