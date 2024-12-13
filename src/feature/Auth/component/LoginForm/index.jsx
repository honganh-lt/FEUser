import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';  // No need for `useFormState` anymore
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'component/form-controls/InputField';  // Ensure the correct import path
import { Avatar, Box, Button, LinearProgress, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import PasswordField from 'component/form-controls/PasswordField';
import clsx from 'clsx';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  // Define validation schema with Yup
  const schema = yup.object({
    fullName: yup.string().required('Full name is required')
      .test('Should have at least two words', 'Please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('Email is required').email('Please enter a valid email address.'),
    password: yup.string().required('Password is required'),
  });

  // Initialize React Hook Form with Yup validation schema
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const handleSubmitForm = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    
    reset(); // Reset form after successful submit
  };

  return (
    <div
      sx={{
        position: 'relative',
        width: '400px',
        margin: 'auto',
        padding: 3,  // You can replace this with `theme.spacing(3)`
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          top: 1,
          left: 0,
          right: 0,
        }}
      >
        {isSubmitting && <LinearProgress />}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 2,
        }}
      >
        <Avatar
          sx={{
            marginBottom: 2,
            backgroundColor: 'primary.main',
          }}
        >
          <LockOutlined />
        </Avatar>

        <Typography
          sx={{
            marginBottom: 3,
            fontWeight: 'bold',
          }}
          component="h3"
          variant="h5"
        >
          Sign In
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <InputField 
          name="fullName" 
          label="Full Name" 
          form={{ register, errors }} 
        />
        <InputField 
          name="email" 
          label="Email" 
          form={{ register, errors }} 
        />
        <PasswordField 
          name="password" 
          label="Password" 
          form={{ register, errors }} 
        />
        
        {/* Example of additional password confirmation field (if needed) */}
        {/* <PasswordField name="retypePassword" label="Retype Password" form={{ register, errors }} /> */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 2,
          }}
        >
          <Button
            disabled={isSubmitting}
            type="submit"
            className={clsx('submit')}  // Optionally use dynamic class names
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign In
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default LoginForm;
