import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

//Pages
import LandingPage from '../../pages/LandingPage/LandingPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import PasswordForgetPage from '../PasswordForgetPage/PasswordForgetPage';
import HomePage from '../../pages/HomePage/HomePage';
import AccountPage from '../../pages/AccountPage/AccountPage';
import AdminPage from '../../pages/AdminPage/AdminPage';


const App = () => (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  );
  export default withAuthentication(App);