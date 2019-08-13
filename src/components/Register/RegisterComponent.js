import React, { Component } from "react";
import "../../styles/register.css";
import axios from "axios";
class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form
          onSubmit={this.submitHandler}
          id="register-form"
          method="post"
          role="presentation"
        >
          <div className="form-group">
            <input
              type="text"
              name="userId"
              id="userId"
              tabIndex="1"
              className="form-control"
              placeholder="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              id="title"
              tabIndex="1"
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="body"
              id="body"
              value={body}
              tabIndex="2"
              className="form-control"
              placeholder="Body"
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <input
                  type="submit"
                  name="register-submit"
                  id="register-submit"
                  tabIndex="4"
                  className="form-control btn btn-register"
                  value="Register Now"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterComponent;
