import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


const Register = () => {
  const { register, isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);


  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = user;

  const onChange = e => {
    // console.log(e.target.value);
    setUser({...user, [e.target.name]: e.target.value})
  }
  const onSubmit = e => {
    e.preventDefault();
    console.log(user);
    register(user);

  }


  return (
    // <h1>Register</h1>
    <section className="vh-100" style={{"backgroundColor": "#eee"}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{"borderRadius": "25px"}}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form onSubmit={onSubmit} className="mx-1 mx-md-4 needs-validation" noValidate>

                      <div className="d-flex flex-row align-items-center mb-4 input-group has-validation">
                        <i className="bi bi-person-fill m-2" style={{'fontSize': '1.5rem'}}></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name='name' value={name} id="form3Example1c" className="form-control" placeholder='Your Name' onChange={onChange} required />
                          {/* <label className="form-label" htmlFor="form3Example1c">Your Name</label> */}
                          <div className="invalid-feedback">
                            Please provide a username.
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-envelope-fill m-2" style={{'fontSize': '1.5rem'}}></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" name='email' value={email} id="form3Example3c" className="form-control" placeholder='Your Email' onChange={onChange} required />
                          {/* <label className="form-label" htmlFor="form3Example3c">Your Email</label> */}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-lock-fill m-2" style={{'fontSize': '1.5rem'}}></i> 
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" name='password' value={password} id="form3Example4c" className="form-control" placeholder='Password' onChange={onChange} required/>
                          {/* <label className="form-label" htmlFor="form3Example4c">Password</label> */}
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
    
}

export default Register