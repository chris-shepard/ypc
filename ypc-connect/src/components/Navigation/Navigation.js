import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../../components/SignOut/SignOut';
import { AuthUserContext } from '../Session';

const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const navMounted = () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
}

class NavigationAuth extends React.Component {
  componentDidMount() {
    navMounted();
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to={ROUTES.LANDING} className="navbar-item">Landing</Link>
            <Link to={ROUTES.HOME} className="navbar-item">Home</Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Profile
      </a>

              <div className="navbar-dropdown">
                <Link to={ROUTES.ACCOUNT} className="navbar-item">Account</Link>
                <Link to={ROUTES.ADMIN} className="navbar-item">Admin</Link>

                <hr className="navbar-divider"></hr>
                <a className="navbar-item">
                  Report an issue
        </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <SignOutButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
/*
<ul>
  <li>
    <Link to={ROUTES.LANDING} className="navbar-item">Landing</Link>
  </li>
  <li>
    <Link to={ROUTES.HOME} className="navbar-item">Home</Link>
  </li>
  <li>
    <Link to={ROUTES.ACCOUNT} className="navbar-item">Account</Link>
  </li>
  <li>
    <Link to={ROUTES.ADMIN} className="navbar-item">Admin</Link>
  </li>
  <li>
    <SignOutButton />
  </li>
</ul> */

class NavigationNonAuth extends React.Component {
  componentDidMount(){
    navMounted();
  }
  
  render() {
    return (
      <ul>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
      </ul>
    )
  }
}

export default Navigation;