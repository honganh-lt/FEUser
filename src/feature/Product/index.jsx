import React from 'react';
// import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom'; 
import ListPage from 'feature/Todo/pages/ListPage';
import { Box } from '@mui/material';

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    return (
        <Box>
            <Routes>
                
                <Route path='/products' element={<ListPage />} />
            </Routes>
        </Box>
    );
}

export default ProductFeature;
