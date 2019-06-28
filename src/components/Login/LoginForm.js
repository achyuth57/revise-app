import React, { Component } from "react";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      Password: "",
      message: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = () => {
    return this.state.userName === ""
      ? this.setState({ message: "Error" })
      : null;
  };
  render() {
    return (
      <div>
        <form id="login-form" style={{ display: "block" }}>
          <div className="form-group">
            <input
              onChange={this.changeHandler}
              type="text"
              name="userName"
              value={this.userName}
              className="form-control"
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.changeHandler}
              type="password"
              value={this.Password}
              name="Password"
              className="form-control"
              placeholder="Password"
            />
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
        {this.state.userName +
          "__" +
          this.state.Password +
          "__" +
          this.state.message}
      </div>
    );
  }
}

export default LoginForm;
