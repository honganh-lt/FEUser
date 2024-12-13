import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Grid, Paper, InputBase, styled } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';


function ListExam(props) {
  useEffect(() => {
    // useEffect cần phải có tác dụng, ví dụ gọi API hoặc xử lý logic khi component mount
  }, []); // Có thể để trống array dependency nếu không cần theo dõi bất kỳ state nào.

  return (
    <div>
     vjhvgjhcfghcfvxcf
      <Box
        sx={{
          border: '4px solid rgba(23, 143, 165, 0.5)', 
          width: '30%',
          padding: '20px', 
          margin: '50px auto', 
          background: 'rgba(85, 239, 196, 0.2)', 
        }}
      >
        <h2
          style={{
            margin: 0,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Môn Nguyên lý hệ điều hành
        </h2>
      </Box>

      
    </div>
  );
}

export default ListExam;
