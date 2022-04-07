import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Dashboard from './components/UserDashboard/Dashboard';
import HabitState from './context/HabitState';
import './App.css';

function App() {
  return (
    <HabitState>
      <Router>
        <div className='App'>
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </HabitState>
    
  );
}

export default App;
