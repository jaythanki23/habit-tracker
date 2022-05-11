import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const onClick = () => {
    logout();
  }

  const guestLinks = (
    <>
      <li className='nav-item'>
        <Link to='/register' className='nav-link link-dark' >Register</Link>
      </li>
      <li className='nav-item'>
        <Link to='/login' className='nav-link link-dark' >Login</Link>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li className='nav-item'>
        <Link to='/' className='nav-link link-dark' >Home</Link>
      </li>
      <li className='nav-item'>
        <Link to='/progress' className='nav-link link-dark' >Progress</Link>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link' onClick={onClick} style={{'color': 'black'}} ><span>Logout</span></a>
      </li>
    </>
  )


  return (
    <nav className='navbar navbar-expand-sm' style={{"backgroundColor": "#f9f8f4"}}>
      <div className='container-fluid'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
          {isAuthenticated ? <p className='nav-link' style={{'color': 'black'}}>Hello, {user && user.name}</p>: null} 
          </li>
        </ul>
      </div>
      <div className='container-fluid justify-content-end'>
        <ul className='navbar-nav'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar