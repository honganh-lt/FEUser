import React, { useEffect } from 'react';
import { Box, Button, Container, Grid, styled } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Styled components
const SearchIconWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
}));

const StyledInputBase = styled('input')(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '10px',
  width: '100%',
  fontSize: '16px',
}));

const LeftBox = styled(Grid)(({ theme }) => ({
  width: '400px',
  height: '50vh',
}));

const RightBox = styled(Grid)(({ theme }) => ({
  flex: '1 1 auto',
}));

function ListPage() {
  useEffect(() => {}, []); 

  return (
    <div>
      <Box
        sx={{
          border: '4px solid rgba(23, 143, 165, 0.5)', 
          width: '40%',
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

      <Box pt={4}>
        <Container>
          <Grid container spacing={8}>
            <LeftBox item>
              <Box
                sx={{
                  display: 'block',
                  justifyContent: 'center',
                  flexGrow: 2.5,
                  position: 'relative',
                  top: '1rem',
                  left: '1.2rem',
                  width: '300px',
                  height: '80vh',
                }}
              >
                <Box sx={{ position: 'relative', border: '4px solid rgba(23, 143, 165, 0.5)', borderRadius: '10px'}}>
                  <StyledInputBase
                  sx={{width: '269px'}}
                    placeholder="Tìm kiếm môn học..."
                    aria-label="search"
                  />
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                </Box>
                <Box
                  sx={{
                    borderBottom: '10px solid rgba(23, 143, 165, 0.5)', 
                    width: '96%',
                    height: '6%',
                    padding: '5px', 
                    margin: '40px auto', 
                    position: 'relative',
                    boxShadow: '0px 4px 10px rgba(23, 143, 165, 0.7)', 
                  }}
                > 
                  <Link to="/albums">
                    <Button sx={{ width: '100%', padding: '10px', color: '#000' }}>
                      Môn Nguyên lý hệ điều hành
                    </Button>
                  </Link>
                </Box>
                <Box
                  sx={{
                    borderBottom: '10px solid rgba(23, 143, 165, 0.5)', 
                    width: '96%',
                    height: '6%',
                    padding: '5px', 
                    margin: '40px auto', 
                    position: 'relative',
                    boxShadow: '0px 4px 10px rgba(23, 143, 165, 0.7)', 
                  }}
                > 
                  <Link to="/albums">
                    <Button sx={{ width: '100%', padding: '10px', color: '#000' }}>
                      Môn Kiến Trúc Máy tính & Vi xử lý
                    </Button>
                  </Link>
                </Box>
                <Box
                  sx={{
                    borderBottom: '10px solid rgba(23, 143, 165, 0.5)', 
                    width: '96%',
                    height: '6%',
                    padding: '5px', 
                    margin: '40px auto', 
                    position: 'relative',
                    boxShadow: '0px 4px 10px rgba(23, 143, 165, 0.7)', 
                  }}
                > 
                  <Link to="/albums">
                    <Button sx={{ width: '100%', padding: '10px', color: '#000' }}>
                      Môn Mạng máy tính
                    </Button>
                  </Link>
                </Box>
              </Box>
            </LeftBox>

            <RightBox item>
              {/* Chương 1 */}
              <Box
                sx={{
                  borderBottom: '10px solid rgba(23, 143, 165, 0.5)', 
                  width: '100%',
                  height: '90px',
                  position: 'relative',
                  boxShadow: '0px 4px 10px rgba(23, 143, 165, 0.7)', 
                  marginBottom: '40px', 
                }}
              > 
                <Link to="/albums">
                  <Button sx={{ width: '100%', padding: '20px', marginTop: '10px', color: '#000', justifyContent: 'flex-start' }}>
                    Chương 1: Giới Thiệu Chung
                  </Button>
                </Link>
              </Box>

              {/* Chương 2 */}
              <Box
                sx={{
                  borderBottom: '10px solid rgba(23, 143, 165, 0.5)', 
                  width: '100%',
                  height: '90px',
                  position: 'relative',
                  boxShadow: '0px 4px 10px rgba(23, 143, 165, 0.7)', 
                  marginBottom: '40px', 
                }}
              >
                <Link to="/albums">
                  <Button sx={{ width: '100%', padding: '20px', marginTop: '10px', color: '#000', justifyContent: 'flex-start' }}>
                    Chương 2: Cấu trúc hệ điều hành
                  </Button>
                </Link>
              </Box>

              {/* Other chapters */}
              {/* You can continue adding more boxes here similar to Chương 1, Chương 2, etc. */}
            </RightBox>

          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ListPage;
