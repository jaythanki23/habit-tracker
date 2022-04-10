import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-dark'>
      <div className='container justify-content-end'>
        <Link to='/register' className='nav-link float-end' >Register</Link>
        <Link to='/login' className='nav-link active' >Login</Link>
        {/* <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/register' className='nav-link active' >Register</Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-link active' >Login</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  )
}

export default Navbar