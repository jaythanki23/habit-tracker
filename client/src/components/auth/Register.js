import React from 'react';


const Register = () => {
  return (
    // <h1>Register</h1>
    <section className="vh-100" style={{"background-color": "#eee"}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{"border-radius": "25px"}}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form className="mx-1 mx-md-4 needs-validation" novalidate>

                      <div className="d-flex flex-row align-items-center mb-4 input-group has-validation">
                        <i className="bi bi-person-fill m-2" style={{'fontSize': '1.5rem'}}></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" className="form-control" placeholder='Your Name' required />
                          {/* <label className="form-label" htmlFor="form3Example1c">Your Name</label> */}
                          <div class="invalid-feedback">
                            Please provide a username.
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i class="bi bi-envelope-fill m-2" style={{'fontSize': '1.5rem'}}></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" className="form-control" placeholder='Your Email' required />
                          {/* <label className="form-label" htmlFor="form3Example3c">Your Email</label> */}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i class="bi bi-lock-fill m-2" style={{'fontSize': '1.5rem'}}></i> 
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" className="form-control" placeholder='Password' required/>
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