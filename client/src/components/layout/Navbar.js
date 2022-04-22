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
        <Link to='/register' className='nav-link' >Register</Link>
      </li>
      <li className='nav-item'>
        <Link to='/login' className='nav-link' >Login</Link>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li className='nav-item'>
        <p className='nav-link' style={{'color': 'white'}}>Hello, {user && user.name}</p>
      </li>
      <li className='nav-item'>
        <a href='#' className='nav-link' onClick={onClick} ><span>Logout</span></a>
      </li>
    </>
  )


  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
      <div className='container-fluid justify-content-end'>
        <ul className='navbar-nav'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar