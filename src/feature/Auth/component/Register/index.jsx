import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack'; 
import { register } from 'feature/Auth/userSlice'; // Action register từ Redux
import userApi from 'api/userApi'; // Import API gọi đăng ký
import RegisterForm from '../RegisterForm'; // Đảm bảo bạn đã tạo RegisterForm
import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar(); // Hook từ notistack
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading khi gửi yêu cầu

  const handleSubmit = async (values) => {
    try {
      // Tự động gán username = email
      values.username = values.email;

      // Hiển thị trạng thái loading
      setIsLoading(true);

      // Gọi API đăng ký người dùng
      const response = await userApi.register(values);
      
      // Nếu API đăng ký thành công, dispatch action để lưu thông tin người dùng (nếu cần)
      dispatch(register(response.data)); // Hoặc lưu thông tin vào Redux store

      // Hiển thị thông báo thành công
      enqueueSnackbar('Register successfully!', { variant: 'success' });

      // Đóng dialog đăng ký nếu có
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog(); // Đóng form đăng ký
      }
    } catch (error) {
      console.error('Failed to register:', error);

      // Hiển thị thông báo lỗi
      enqueueSnackbar('Registration failed. Please try again.', { variant: 'error' });
    } finally {
      // Dừng trạng thái loading
      setIsLoading(false);
    }
    
    // try {
    //   // Tự động gán username = email
    //  values.username = values.email;

    //   const action = register(values);
    //   const resultAction = await dispatch(action);
    //   const user = unwrapResult(resultAction);
    //   console.log('New user', user);
    // } catch (error) {
    //   console.log('Failed to register: ', error);
    // }
  };

  return (
    <div>
      {/* Hiển thị form đăng ký và truyền vào handleSubmit */}
      <RegisterForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}

export default Register;
