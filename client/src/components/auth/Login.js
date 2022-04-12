import React from 'react'

const Login = () => {
  return (
    <section className="vh-100" style={{"background-color": "#9A616D"}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{"border-radius": "1rem"}}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://images.unsplash.com/photo-1579762593217-46655e4e7efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2117&q=80"
                    alt="login form" style={{"height": "500px", "width": "400px"}}/>
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form>

                      {/* <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219"}}></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div> */}

                      <h5 className="fw-normal mb-3 pb-3 fs-2" style={{"letter-spacing": "1px"}}>Sign in</h5>

                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Email Address' required />
                        {/* <label className="form-label" htmlFor="form2Example17">Email address</label> */}
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Password' required />
                        {/* <label className="form-label" htmlFor="form2Example27">Password</label> */}
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                      </div>
                    </form>

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

export default Login