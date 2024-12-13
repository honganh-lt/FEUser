import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid } from '@mui/material';



function ListPage2(props) {
    return (
        <Box>
            <Container>
                <Grid container>
                    <Grid item>Left column</Grid>

                    <Grid item>Right column</Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage2;