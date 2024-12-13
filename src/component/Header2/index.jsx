import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { Link, NavLink } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { DialogTitle, IconButton } from '@mui/material';
import { AccountCircle, Close, Search as SearchIcon } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import LoginForm from 'feature/Auth/component/LoginForm';
import Register from 'feature/Auth/component/Register';
import { useSelector } from 'react-redux';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { styled } from '@mui/system';


const Search = styled('div')({
  position: 'relative',
  borderRadius: '10px',
  backgroundColor: '#f1f1f1',
  marginRight: '16px',
  marginLeft: '16px', 
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px',
});


const StyledInputBase = styled('input')({
  paddingLeft: '16px',
  paddingRight: '36px', 
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '10px',
  border: '1px solid #ccc',
  '&:focus': {
    outline: 'none',
  },
});


const SearchIconWrapper = styled('div')({
  position: 'absolute',
  right: '10px',  
  color: 'black',
});

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};


export default function Header() {
  const loggedInUser = useSelector(state => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(MODE.LOGIN);


 
  const popupState = usePopupState({
    variant: 'popover',
    anchorEl: null,
  });


  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div style={{ position: 'relative' }}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="">
        <Toolbar sx={{ flexGrow: 1, background: 'white', height: '30vh', borderTop: '10px solid #178FA5'}}>
            <CodeIcon />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link sx={{ flexGrow: 1 }} to=""> 
            {/* to="/" */}
                  <img
                    src="https://s3-alpha-sig.figma.com/img/d0bb/9c46/8b56d561495fc6c4bb192636d840b2e3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMBsRL~oIfxkTOyWayiEwaw5o5C19JHb-VnuNxRPO99dc5L4fLwJs6MJxAUuArFATviCTGfwGHsVolDisiI3tlgLPCsJs8NW0HKTiaD3Z6AX64~KaRW-MtX9ADk3yAKL96w56tgtaWg5eK4rDV7g1sa69un6TdKYRtKtknsi1YkRN3OkzrWICjHfZ6wAfT03NP6sWtCEQJk8rLH9ZBL2zf-QAeJb5bhloRqYgPs-2I6fwV41dxjPKqtNq5-AySSyYrw1ErHX5yeXZQRmR4aYSEDzAwq4V3svWqZA4PRCVy7TpWsJdF1VsoLJIl-lEAd~EiWTafEccoFMZLSE3CHrFg__"
                    alt="Logo"
                    style={{ outline: 'none', maxWidth: '50%', height: 'auto' , position: 'relative', left: '2rem'}}
                  />
                </Link>
            </Typography>


            {/* Căn giữa thanh tìm kiếm */}
            <Box sx={{ display: 'block', justifyContent: 'center', flexGrow: 2.5, position: 'relative', top: '-1rem' }}>
            <Button
                sx={{
                    fontSize: '2.2rem',
                    color: '#178FA5',
                    textTransform: 'uppercase',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                    fontWeight: '800',
                }}
                >
                Trắc nghiệm online
                </Button>

              <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                position: 'relative',
                top: '2rem',
                width: '100%',
                '@media (max-width: 768px)': {
                flexDirection: 'column', 
                alignItems: 'center', 
                top: '1rem', 
                },
            }}
            >
            <NavLink to="/" activeClassName="active"> 
            {/* to="/albums"  */}
                <Button
                sx={{
                    fontSize: '16px',
                    color: '#000',
                    '&:hover': {
                    color: '#178FA5',
                    },
                    '&:active': {
                    color: '#16a085',
                    },
                }}
                >
                Trang chủ
                </Button>
            </NavLink>

            <NavLink to="/products" activeClassName="active">
                <Button
                sx={{
                    fontSize: '16px',
                    color: '#000',
                    '&:hover': {
                    color: '#178FA5',
                    },
                    '&:active': {
                    color: '#16a085',
                    },
                }}
                >
                Ôn tập
                </Button>
            </NavLink>

            <NavLink to="/exams" activeClassName="active">
                <Button
                sx={{
                    fontSize: '16px',
                    color: '#000',
                    '&:hover': {
                    color: '#178FA5',
                    },
                    '&:active': {
                    color: '#16a085',
                    },
                }}
                >
                Bài thi
                </Button>
            </NavLink>
            </Box>

            </Box>


            <Box>
            <img
                    src="https://s3-alpha-sig.figma.com/img/d8be/43b0/7a7e657b44865f3ea528bfe615947a91?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nG0VdMKrJx60BEqGcSDStV5gE9BPaLPe4V6DqfsJ9Zsfjg1d9dK8CWhYilAj5VJUSNeP5ZInqAG9mCmTtq9dR9TGRTjc249xJfSxPdcHKQzfE0i9p9Sq8UVNLgqLnZwV-~zZY9CuTHzbOHifH7Scb6G-c6HvP-LY3pHt5pfIiefAisufNxvBCfHjBjxoV~hcqzsVQ6RmoXSmCEz5esev33U5HfVOZBHA57ZWLTgq0e-Iya4JcNTmc2tC7DwQL418~9lssqeUj1z8gTdKxWgOYGLW6tj0fbtnchu5-9qtEpGUFhlvbYEZ56AKQct~5EJYd032yVc6vlAWSUybQ81g3w__"
                    alt="Logo"
                    style={{ outline: 'none', maxWidth: '60%', height: 'auto', position: 'relative', left: '2rem' }}
                  />
            </Box>

            {!isLoggedIn && (
              <Button
                color="inherit"
                onClick={handleClickOpen}
                sx={{
                  color: 'black',
                  position: 'absolute',
                  top: '40px', 
                  right: '60px',
                  zIndex: '10',
                  '&:hover': {
                    color: '#178FA5', 
                  },
                  '&:active': {
                    color: '#16a085', 
                  },
                }}
              >
                Đăng nhập
              </Button>
            )}


            {isLoggedIn && (
              <IconButton color="inherit" onClick={popupState.open}>
                <AccountCircle />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>


      {/* Dialog cho đăng nhập/đăng ký */}
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>
          <IconButton sx={{ position: 'absolute', top: 1, right: 1, color: grey[500], zIndex: 1 }} onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>


        <DialogContent>
          {mode === MODE.LOGIN && (
            <>
              <LoginForm closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account? Register here.
                </Button>
              </Box>
            </>
          )}


          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account? Login here.
                </Button>
              </Box>
            </>
          )}
        </DialogContent>


        {/* <DialogActions></DialogActions> */}
      </Dialog>
    </div>
  );
}
