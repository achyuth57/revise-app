import React from "react";
import LoginForm from "./LoginForm";

function LoginComponent() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="md-6 offset-3">
            <div className="panel panel-login">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-6">
                    <a href="#" id="login-form-link" className="active">
                      Login
                    </a>
                  </div>
                  <div class="col-xs-6">
                    <a href="#" id="register-form-link" className="active">
                      Register
                    </a>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <LoginForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
