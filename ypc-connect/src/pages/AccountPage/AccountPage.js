import React from 'react';
import { PasswordForgetForm } from '../../components/PasswordForgetPage/PasswordForgetPage';
import PasswordChangeForm from '../../components/PasswordChange/PasswordChange';
import { AuthUserContext, withAuthorization } from '../../components/Session';

const AccountPage = () => (
    <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);