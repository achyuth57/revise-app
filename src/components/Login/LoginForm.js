import React, { Component } from "react";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      Password: "",
      message: {
        nameError: "",
        passwordError: ""
      },
      isValid: false
    };
  }

  changeHandler = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.message;
    switch (name) {
      case "userName":
        errors.nameError =
          value.length < 5 ? "name must be 5 characters long!" : "";
        break;

      case "Password":
        errors.passwordError =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  submitHandler = event => {
    event.preventDefault();
    if (this.validateForm(this.state.message)) {
      console.log("ValiD Form");
    } else {
      console.log("Invalid Form");
    }
  };

  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <form id="login-form" style={{ display: "block" }}>
          <div className="form-group">
            <input
              onChange={this.changeHandler}
              noValidate
              type="text"
              name="userName"
              value={this.userName}
              className={`form-control ${
                this.state.message.nameError ? "is-valid" : ""
              } `}
              placeholder="User Name"
              onBlur={this.validateField}
            />
            {message.nameError.length > 0 && (
              <span className="error">{message.nameError}</span>
            )}
          </div>

          <div className="form-group">
            <input
              onChange={this.changeHandler}
              noValidate
              type="password"
              value={this.Password}
              name="Password"
              className={`form-control ${
                this.state.message.passwordError ? "is-valid" : ""
              } `}
              placeholder="Password"
              onBlur={this.validateField}
            />
            {message.passwordError.length > 0 && (
              <span className="error">{message.passwordError}</span>
            )}
          </div>
          <div className="form-group">
            <input
              onClick={this.submitHandler}
              type="submit"
              value="Login"
              className="btn btn-primary"
            />
          </div>
        </form>
        {/* {this.state.userName +
          "__" +
          this.state.Password +
          "__" +
          JSON.stringify(this.state.message)} */}
      </div>
    );
  }
}

export default LoginForm;
