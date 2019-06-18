import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Link,Route} from 'react-router-dom'
import * as ROUTES from '../fire-auth/routes'


import LandingPage from '../fire-auth/pages/Landing';
import SignUpPage from '../fire-auth/pages/SignUp';
import SignInPage from '../fire-auth/pages/SignIn';
import PasswordForgetPage from '../fire-auth/pages/PasswordForget';
import HomePage from '../fire-auth/pages/Home';
import AccountPage from '../fire-auth/pages/Account';
import AdminPage from '../fire-auth/pages/Admin';



const Header = (props) =>(
    <nav className="nav nav-default header">
        <div className="container">
        <div className="row m-auto">
                <i className="fa fa-film fa-2x text-white my-auto"></i>
                <div className="h3 ml-3 my-auto text-light" href="/">{props.title}</div>
</div>
        </div>
    <Router>
        <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>

    <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </Router>
    </nav>
);

Header.defaultProps = {
    title:'Title'
}

Header.propTypes ={
    title:PropTypes.string
}

export default Header