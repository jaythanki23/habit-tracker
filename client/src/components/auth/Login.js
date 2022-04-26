import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
// import HabitContext from '../../context/habit/habitContext';

const Login = () => {

  const { login, isAuthenticated, error } = useContext(AuthContext);
  // const { setDateTime } = useContext(HabitContext);

  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // console.log(user);
    // setDateTime();
    login(user);
  }

  return (
    <div>
      {error && <div className="alert alert-danger m-2 p-2" role="alert">
                  {error}
                </div>
      }
      <section className="vh-100" style={{"backgroundColor": "#eee"}}>
        <div className="container h-100">
          {/* <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{"borderRadius": "1rem"}}>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black"> */}

          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{"borderRadius": "15px"}}>
                <div className="card-body p-5">
                  <h1 className="text-center mb-5">Sign In</h1>

                      <form onSubmit={onSubmit}>

                        {/* <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219"}}></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div> */}

                        {/* <h5 className="fw-normal mb-3 pb-3 fs-2" style={{"letterSpacing": "1px"}}>Sign in</h5> */}

                        <div className="form-outline mb-4">
                          <input type="email" name='email' value={email} id="form2Example17" className="form-control form-control-lg" placeholder='Email Address' onChange={onChange} required />
                          {/* <label className="form-label" htmlFor="form2Example17">Email address</label> */}
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" name='password' value={password} id="form2Example27" className="form-control form-control-lg" placeholder='Password' onChange={onChange} required />
                          {/* <label className="form-label" htmlFor="form2Example27">Password</label> */}
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
    </div>
  )
}

export default Login