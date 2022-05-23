import React, { useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import HabitContext from '../../context/habit/habitContext';
import CheckboxForm from '../form/CheckboxForm';


const Register = () => {
  const { register, isAuthenticated, error } = useContext(AuthContext);
  const { setDateTime } = useContext(HabitContext);


  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(isAuthenticated) {
  //     navigate('/');
  //   }
  // }, [isAuthenticated, navigate]);


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
    setDateTime();
    register(user);

  }


  return (
    // <h1>Register</h1>
    isAuthenticated ? (<CheckboxForm />) : 
    (
      <div>
        {error && <div className="alert alert-danger m-2 p-2" role="alert">
                    {error}
                  </div>
        }
        <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card shadow-sm" style={{"borderRadius": "5px", "height": "35rem"}}>
                  <div className="card-body p-5">
                    <h1 className="text-center mb-5">Sign Up</h1>

                    <form onSubmit={onSubmit} className="mx-1 mx-md-4 needs-validation" noValidate>
                      <div className="form-outline mb-5">
                        <input type="text" id="form3Example1cg" name='name' value={name} className="form-control form-control-lg" placeholder='Your Name' onChange={onChange} required />
                        <div className="invalid-feedback">
                            Please provide a username.
                        </div>
                      </div>

                      <div className="form-outline mb-5">
                        <input type="email" name='email' value={email} id="form3Example3cg" className="form-control form-control-lg" placeholder='Your Email' onChange={onChange} required />
                      </div>

                      <div className="form-outline mb-5">
                        <input type="password" name='password' value={password} id="form3Example4cg" className="form-control form-control-lg" placeholder='Password' onChange={onChange} required />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit"
                          className="btn btn-primary text-light btn-block btn-lg">Register</button>
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
  )
    
}

export default Register