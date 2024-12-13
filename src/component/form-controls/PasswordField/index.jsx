import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,  // form bao gồm register và errors từ react-hook-form
  name: PropTypes.string.isRequired,  // name là tên của trường input (title)
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const { register, errors } = form;  // Lấy register và errors từ form

  // Kiểm tra lỗi cho trường input
  const hasError = !!errors[name];

  //Kiểm tra có password 
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(x => !x);
  }

  return (
    <FormControl error={hasError} fullWidth margin='normal' variant="outlined">
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <OutlinedInput
            {...register(name)}
            id= {name}
            type={showPassword ? 'text' : 'password'}
            label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={toggleShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                //   onMouseUp={handleMouseUpPassword}
                //   edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            disabled={disabled}
            // error={!!hasError}  // Hiển thị lỗi nếu có
            // helperText={hasError ? errors[name]?.message : ''}  // Hiển thị thông báo lỗi

            // label="RetypePass"
            // labelWith={70}
            
          />
          <FormHelperText>{hasError ? errors[name]?.message : ''}</FormHelperText>
        </FormControl>
   
  );
}

export default PasswordField;
