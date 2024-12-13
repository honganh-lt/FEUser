import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'component/form-controls/InputField';  // Đảm bảo đường dẫn đúng
import { Avatar, Box, Button, LinearProgress, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import PasswordField from 'component/form-controls/PasswordField';
import clsx from 'clsx';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  // Định nghĩa schema validation bằng yup
  const schema = yup.object({
    fullName: yup.string().required('Full name is required')
      .test('Should has at least two words', 'Please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('Email is required').email('Please enter a valid email address.'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    retypePassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Retype Password is required'),
  });

  // Cấu hình react-hook-form với yup validation schema
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  // Hàm xử lý khi form được submit
  const handleSubmitForm = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }

    reset(); // Reset form sau khi submit
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '400px',
        margin: 'auto',
        padding: '24px',  // theme.spacing(3) thay thế trực tiếp bằng giá trị
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
          Sign Up
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <InputField name="fullName" label="Full Name" form={{ register, errors }} />
        <InputField name="email" label="Email" form={{ register, errors }} />
        <PasswordField name="password" label="Password" form={{ register, errors }} />
        <PasswordField name="retypePassword" label="Retype Password" form={{ register, errors }} />

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
            className={clsx('submit')}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default RegisterForm;
