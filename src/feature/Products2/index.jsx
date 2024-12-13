import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Nếu bạn vẫn muốn sử dụng makeStyles
import product2Api from 'api/product2Api';
import ProductSkeleton from './component/ProductSkeleton';
import ProductList from './component/ProductList';

// Sử dụng makeStyles từ @mui/styles nếu bạn không muốn chuyển sang sx hoặc styled
const useStyles = makeStyles(theme => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
}));

function Products2Feature(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  //JSON server. tìm hiểu vào buổi chiều
  

  useEffect(() => {
    (async () => {
        try {
            const {data} = await product2Api.getAll({_page: 1, _limit: 10});
            // console.log({response});
            setProductList(data);
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }

        setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
                Left column
            </Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
                {loading ? <ProductSkeleton /> : <ProductList data={productList} /> }
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Products2Feature;
