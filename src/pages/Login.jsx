// src/pages/AdminLogin.jsx
import React from "react";
import "admin-lte/dist/css/adminlte.min.css";
import "font-awesome/css/font-awesome.min.css";

function AdminLogin() {
  return (
    <div className="hold-transition login-page" style={{ minHeight: "100vh" }}>
      <div className="login-box">
        <div className="login-logo">
          <b>Health</b>Center
        </div>

        <div className="card">
          <div className="card-body login-card-body">

            {/* Centered image */}
            <div className="text-center mb-3">
              <img
                src="assets/images/health_logo.png" // use path starting from public folder
                className="img-fluid"
                alt="Medical Logo"
              />
            </div>

            <p className="login-box-msg">Administrator</p>

            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fa fa-lock" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <p className="mb-1 mt-3">
              <a href="#">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="#" className="text-center">
                Register a new membership
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
