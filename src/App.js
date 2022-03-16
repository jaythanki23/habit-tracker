import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
    
    
  );
}

export default App;
