import React from 'react';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className="button is-primary">
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);