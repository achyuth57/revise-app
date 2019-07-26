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
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
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
