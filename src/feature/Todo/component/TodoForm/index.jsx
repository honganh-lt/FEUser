import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'component/form-controls/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  // Định nghĩa schema validation bằng yup
  const schema = yup.object({
    title: yup
      .string()
      .required('Please enter title')  // Kiểm tra trường này có bắt buộc
      .min(5, 'Title is too short'),   // Kiểm tra độ dài tối thiểu của title
  });

  // Cấu hình react-hook-form với yup validation schema
  const form = useForm({
    defaultValues: {
      title: '',  // Giá trị mặc định của trường title là rỗng
    },
    resolver: yupResolver(schema),  // Kết nối yup resolver để kiểm tra hợp lệ
  });

  // Hàm xử lý khi form được submit
  const handleSubmit = (values) => {
    console.log('TODO FORM: ', values);  // In ra giá trị form khi submit
    const { onSubmit } = props;  // Lấy hàm onSubmit từ props (nếu có)
    if (onSubmit) {
      onSubmit(values);  // Gọi hàm onSubmit và truyền giá trị form vào
    }
    form.reset();  // Reset lại form sau khi submit
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {/* Truyền name là "title" cho trường input để liên kết với form */}
      <InputField name="title" label="Todo" form={form} />
      <button type="submit">Submit</button> {/* Nút submit */}
    </form>
  );
}

export default TodoForm;
