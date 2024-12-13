import React from 'react';
// import PropTypes from 'prop-types';
// import { Routes, Route, Link } from 'react-router-dom'; 
// import ListPage from 'feature/Todo/pages/ListPage';
// import { Box, Button, Container, Grid, Paper, InputBase, styled, Item } from '@mui/material';
// import ListExam from 'feature/Todo/pages/ListExam';
// import ListExam from './pages/ListExam';
// import ListExam from 'feature/Todo/pages/ListExam';
import { Box, Grid } from '@mui/material';

ExamFeature.propTypes = {
   
};

function ExamFeature(props) {
    return (
        <div>
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
               Hãy chọn đề thi!
                </h2>
            </Box>


                <Box 
                // sx={{ flexGrow: 1 }}
                     sx={{
                            borderBottom: '10px solid rgba(23, 143, 165, 0.5)', 
                            width: '70%',
                            height: '60%',
                            // padding: '5px', 
                            margin: '40px auto', 
                            position: 'relative',
                            boxShadow: '0px 4px 10px rgba(23, 143, 165, 0.7)', 
                        }}
                >
                    <Grid container spacing={2}
                        sx={{
                            position: 'relative',
                            left: '6rem',
                            
                        }}
                    >
                        <Grid item xs={12} md={5} lg={4}>
                            <Box
                                style={{
                                fontSize: '1.3rem',               
                                textTransform: 'uppercase',       
                                width: 'fit-content',             
                                maxWidth: '100%',                 
                                whiteSpace: 'nowrap',             
                                }}
                            >
                                đề số 01- chương 2: cấu trúc hệ điều hành
                            </Box>
                            </Grid>


                        
                        <Grid container spacing={4} item xs={12} md={7} lg={8}
                            sx={{
                            position: 'relative',
                            left: '6rem'
                        }}
                        >
                        <Grid item xs={6} lg={3}>
                        <Box
                            sx={{
                            border: '2px solid #178FA5',       
                            borderRadius: '8px',            
                            padding: '10px',  
                            position: 'relative',
                            left: '18rem',
                            top: '1rem'               
                            }}
                        >
                            <Box id="category-a" sx={{ fontSize: '1rem', textAlign: 'center' }}>
                            Làm lại
                            </Box>
                        </Box>
                        </Grid>

                    </Grid>

                <Grid container spacing={0} sx={{ order: { xs: 1, sm: 2 }, position: 'relative', top: '-0.5rem', left: '1rem' }}>
                <Grid item>
                    <Box
                    sx={{
                        border: '2px solid #000',      
                        width: '100px',                
                        padding: '5px',              
                        display: 'flex',               
                        alignItems: 'center',          
                        // justifyContent: 'center',      
                        textAlign: 'center',           
                        fontSize: '1rem',              
                        textTransform: 'uppercase',    
                    }}
                    >
                    Lần thi:
                    </Box>
                </Grid>

                <Grid item>
                    <Box
                    sx={{
                        border: '2px solid #000', 
                        width: '100px', 
                        padding: '5px',  
                        display: 'flex', 
                        alignItems: 'center', 
                        // justifyContent: 'center', 
                        textAlign: 'center',
                        fontSize: '1rem', 
                        textTransform: 'uppercase',
                    }}
                    >
                    Ngày thi:
                    </Box>
                </Grid>

                
                <Grid item>
                    <Box
                    sx={{
                        border: '2px solid #000', 
                        width: '100px', 
                        padding: '5px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        // justifyContent: 'center', 
                        textAlign: 'center', 
                        fontSize: '1rem', 
                        textTransform: 'uppercase',
                    }}
                    >
                    Xem lại
                    </Box>
                </Grid>
                </Grid>
            </Grid>
            </Box>

            <Box 
                // sx={{ flexGrow: 1 }}
                     sx={{
                            borderBottom: '10px solid rgba(23, 143, 165, 0.5)', 
                            width: '70%',
                            height: '60%',
                            // padding: '5px', 
                            margin: '40px auto', 
                            position: 'relative',
                            boxShadow: '0px 4px 10px rgba(23, 143, 165, 0.7)', 
                        }}
                >
                    <Grid container spacing={2}
                        sx={{
                            position: 'relative',
                            left: '6rem',
                            
                        }}
                    >
                        <Grid item xs={12} md={5} lg={4}>
                            <Box
                                style={{
                                fontSize: '1.3rem',               
                                textTransform: 'uppercase',       
                                width: 'fit-content',             
                                maxWidth: '100%',                 
                                whiteSpace: 'nowrap',             
                                // overflow: 'hidden',               
                                // textOverflow: 'ellipsis'          
                                }}
                            >
                                đề số 02- chương 2: cấu trúc hệ điều hành
                            </Box>
                            </Grid>


                        {/* Categories Section */}
                        <Grid container spacing={4} item xs={12} md={7} lg={8}
                            sx={{
                            position: 'relative',
                            left: '6rem'
                        }}
                        >
                        <Grid item xs={6} lg={3}>
                        <Box
                            sx={{
                            border: '2px solid #178FA5',       
                            borderRadius: '8px',            
                            padding: '10px',  
                            position: 'relative',
                            left: '18rem',
                            top: '1rem'               
                            }}
                        >
                            <Box id="category-a" sx={{ fontSize: '1rem', textAlign: 'center' }}>
                            Làm lại
                            </Box>
                        </Box>
                        </Grid>

                    </Grid>

                {/* Footer Section */}
                <Grid container spacing={0} sx={{ order: { xs: 1, sm: 2 }, position: 'relative', top: '-0.5rem', left: '1rem',width: '100%' }}>
                <Grid item>
                    <Box
                    sx={{
                        border: '2px solid #000',      
                        width: '100px',                
                        padding: '5px',              
                        display: 'flex',               
                        alignItems: 'center',          
                        // justifyContent: 'center',      
                        textAlign: 'center',           
                        fontSize: '1rem',              
                        textTransform: 'uppercase',    
                    }}
                    >
                    Lần thi:
                    </Box>
                </Grid>

                <Grid item>
                    <Box
                    sx={{
                        border: '2px solid #000', 
                        width: '100px', 
                        padding: '5px',  
                        display: 'flex', 
                        alignItems: 'center', 
                        // justifyContent: 'center', 
                        textAlign: 'center',
                        fontSize: '1rem', 
                        textTransform: 'uppercase',
                    }}
                    >
                    Ngày thi:
                    </Box>
                </Grid>

                <Grid item>
                    <Box
                    sx={{
                        border: '2px solid #000', 
                        width: '100px', 
                        padding: '5px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        // justifyContent: 'center', 
                        textAlign: 'center', 
                        fontSize: '1rem', 
                        textTransform: 'uppercase',
                    }}
                    >
                    Xem lại
                    </Box>
                </Grid>
                </Grid>
            </Grid>
            </Box>
        </div>
    );
}

export default ExamFeature;
