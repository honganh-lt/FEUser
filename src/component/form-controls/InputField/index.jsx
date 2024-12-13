import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,  // form bao gồm register và errors từ react-hook-form
  name: PropTypes.string.isRequired,  // name là tên của trường input (title)
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { register, errors } = form;  // Lấy register và errors từ form

  // Kiểm tra lỗi cho trường input
  const hasError =  errors[name]; //errors &&

  return (
    <TextField
      {...register(name)}  // Kết nối với react-hook-form, truyền register vào
      margin="normal"  // Chỉnh sửa thành 'normal'
      variant="outlined"  // Chỉnh sửa thành 'outlined'
      label={label}
      fullWidth
      disabled={disabled}
      error={!!hasError}  // Hiển thị lỗi nếu có
      helperText={hasError ? errors[name]?.message : ''}  // Hiển thị thông báo lỗi
    />
  );
}

export default InputField;
