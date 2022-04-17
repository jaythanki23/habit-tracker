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
      <Link to='/register' className='nav-link float-end' >Register</Link>
      <Link to='/login' className='nav-link active' >Login</Link>
    </>
  );

  const authLinks = (
    <>
      <p style={{'color': 'white'}}>Hello, {user && user.name}</p>  
      <a href='#' onClick={onClick} ><span>Logout</span></a>
    </>
  )


  return (
    <nav className='navbar navbar-light bg-dark'>
      <div className='container justify-content-end'>
        {isAuthenticated ? authLinks : guestLinks}
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