import React from "react";
import AuthenticationService from "./AuthenticationService";

function Login() {

  const {inputData, handleForm, handleSignIn} = AuthenticationService();

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Ticket Managment System</b>
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleSignIn}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  value={inputData.username}
                  onChange={handleForm}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={inputData.password}
                  onChange={handleForm}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            
            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
