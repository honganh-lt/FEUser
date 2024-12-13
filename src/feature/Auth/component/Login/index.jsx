import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { login } from 'feature/Auth/userSlice'; // Ensure correct import of login action
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar(); // Hook from notistack

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      // Optionally, map the email to username if needed
      values.username = values.email;
      console.log('Form Submit:', values);

      // Dispatch login action
      const action = login(values);
      const resultAction = await dispatch(action);  // Dispatch login action
      const user = unwrapResult(resultAction);  // Get the result (user) from the action

      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog(); // Close dialog if login is successful
      }

    //   console.log('Logged in user:', user);

      // Show success notification
    //   enqueueSnackbar('Login successfully!!!', { variant: 'success' });
    } catch (error) {
      console.log('Failed to Login:', error);

      // Show error notification
      enqueueSnackbar('Login failed. Please try again.', { variant: 'error' });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
