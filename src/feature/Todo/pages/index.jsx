import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';  // Chỉ cần import Routes và Route từ react-router-dom
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import NotFound from '../../../component/NotFound';  // Import NotFound component
import ListExam from './ListExam';
// import ListExam from 'feature/Exam/pages/ListExam';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>
      <Routes>
        {/* Dùng element để render ListPage và DetailPage */}
        <Route path="/todos" element={<ListPage />} />
        <Route path='/todos' element={<ListExam />}/>
        <Route path="/todos/:todoId" element={<DetailPage />} />
        
        {/* Trang NotFound sẽ được render khi không tìm thấy route nào */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default TodoFeature;
