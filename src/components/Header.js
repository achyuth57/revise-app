import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeMainHead from "./HomeComponents/HomeMainHead";
import AboutPopup from "./AboutComponent/AboutComponentContent";
import LoginComponent from "./Login/LoginComponent";

const Header = props => (
  <div>
    <Router>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              {props.title}
            </a>
          </div>

          <ul className="nav navbar-nav">
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Route exact path="/" component={HomeMainHead} />
        <Route path="/about" component={AboutPopup} />
        <Route path="/login" component={LoginComponent} />
      </div>
    </Router>
  </div>
);

Header.defaultProps = {
  title: "First App"
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
