import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
// import styles  from './styles.module.css'

// import * as React from 'react';
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
// import { useSelector } from 'react-redux';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { styled } from '@mui/system';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {

    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const handleIncreaseClick = () => {
        const action = increase(123456); //action creator
        dispatch(action);

    }
    const handleDecreaseClick = () => {
        const action = decrease(123456); //action creator
        dispatch(action);

    }

// Tạo style cho các phần tử
const Search = styled('div')({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#f1f1f1',
    marginRight: '16px',
    marginLeft: '16px', // Thêm margin để cách xa các phần tử khác
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
  });
  
  
  const StyledInputBase = styled('input')({
    paddingLeft: '16px',
    paddingRight: '36px', // Giữ không gian cho biểu tượng tìm kiếm
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
    right: '10px',  // Đưa SearchIcon ra phía cuối
    color: 'black',
  });
  
  
  const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
  };
  
  

    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = React.useState(false);
    const [mode, setMode] = React.useState(MODE.LOGIN);
  
  
    // Popup state for Menu
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
    //     <div className={styles.counter}>
    //         Counter: {count}
    //         <div>
    //             <button onClick={handleIncreaseClick}> Increase </button>
    //             <button onClick={handleDecreaseClick}> Decrease </button>
    //         </div>
    //     </div>
    // );
    <div style={{ position: 'relative' }}>
      


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
      <Box style={{ position: 'relative' }}>
      <h2 style={{ 
    position: 'absolute',
    top: '4%', // Đặt chữ ở giữa ảnh (có thể điều chỉnh để thay đổi vị trí)
    left: '30%', // Đặt chữ ở giữa ngang
    transform: 'translate(-50%, -50%)', // Căn giữa chữ với ảnh
    color: '#178FA5', // Đặt màu chữ là trắng để dễ nhìn trên ảnh
    zIndex: 1, // Đảm bảo chữ luôn nằm trên ảnh
    fontSize: '60px', // Thay đổi kích thước chữ nếu cần
    textAlign: 'center', // Căn giữa chữ
    textTransform: 'uppercase',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  }}>
    Trắc nghiệm online
  </h2>
  
  <p style={{
    position: 'absolute',
    width: '50%',
    top: '20%', // Điều chỉnh vị trí của đoạn văn (dưới h2)
    left: '75%',
    transform: 'translateX(-50%)', // Căn giữa đoạn văn
    color: '#178FA5', // Đặt màu chữ là trắng
    zIndex: 1, // Đảm bảo chữ luôn nằm trên ảnh
    fontSize: '40px',
    textAlign: 'center',
    fontStyle: 'italic',
  }}>
    Rèn luyện mỗi ngày, tự tin điểm cao
  </p>

  
      <img
        src="https://s3-alpha-sig.figma.com/img/a15a/4d08/b2549db74d0736a6c6038f2c86f73832?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0~VZqZhVw4DjmeqkO5kWsI3PPPH8Jbn37sDi7oJ-Vc6WRO~bdFZDggeiaYTH95pWfp0PaviUTbhOrazJJyYQM10iTCMLkrU9N3uI-n5dzGSr2-x295DlGzu~WAcZB3xxQ933qAFKXVQp4ked3ra8izWc2vGNTFQdTK5BPA7Q94rmKZ7c21BiQNvuO~k~DqlFWPNRprnLnleMwoVQIAZ~DgLwh49WH9YEfMtVOgJeXvmLzyJXtMwhd2pMEF~tTr6a51BYxf6fmcUk61FchmJhmsVIH~aKY9IJATP4BSIhMVnHiEOUT6M~ywDzrOUQMA84ii60a9gaHwo3KFKCy~~OQ__"
        alt="Banner"
        style={{
          outline: 'none',
          width: '100%', // Đảm bảo ảnh có chiều rộng 100% của màn hình
          height: '428px', // Giữ tỷ lệ chiều cao đúng của ảnh
          objectFit: 'cover', // Đảm bảo ảnh phủ đầy diện tích mà không bị vỡ
          position: 'relative',
          top: '2rem',
          left: '0',
          filter: 'opacity(0.7)'
        }}
  />
</Box>

<Box
      sx={{
        border: '2px solid rgba(23, 143, 165, 0.5)', // Màu viền của ô
        borderBottom: '10px solid rgba(23, 143, 165, 0.5)', // Viền dưới đậm
        width: '68%',
        padding: '35px', // Khoảng cách giữa viền và nội dung
        borderRadius: '8px', // Bo góc cho ô
        // width: 'fit-content', // Đảm bảo ô có kích thước vừa đủ với nội dung
        margin: '160px auto', // Canh giữa ô trên màn hình
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', // Tạo bóng cho ô
      }}
    >
      <h2 style={{ 
            margin: 0, 
            textAlign: 'center',
            textTransform: 'uppercase',
             }}>
      
            Môn Nguyên lý hệ điều hành</h2>
    </Box>
    
    <Box
      sx={{
        border: '2px solid rgba(23, 143, 165, 0.5)', // Màu viền của ô
        borderBottom: '10px solid rgba(23, 143, 165, 0.5)', // Viền dưới đậm
        width: '68%',
        padding: '35px', // Khoảng cách giữa viền và nội dung
        borderRadius: '8px', // Bo góc cho ô
        // width: 'fit-content', // Đảm bảo ô có kích thước vừa đủ với nội dung
        margin: '10px auto', // Canh giữa ô trên màn hình
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', // Tạo bóng cho ô
        position: 'relative',
        top: '-5rem',
      }}
    >
      <h2 style={{ 
            margin: 0, 
            textAlign: 'center',
            textTransform: 'uppercase',
             }}>
      
            Môn Kiến trúc máy tính & Vi xử lý</h2>
    </Box>

    <Box
      sx={{
        border: '2px solid rgba(23, 143, 165, 0.5)', // Màu viền của ô
        borderBottom: '10px solid rgba(23, 143, 165, 0.5)', // Viền dưới đậm
        width: '68%',
        padding: '35px', // Khoảng cách giữa viền và nội dung
        borderRadius: '8px', // Bo góc cho ô
        // width: 'fit-content', // Đảm bảo ô có kích thước vừa đủ với nội dung
        margin: '10px auto', // Canh giữa ô trên màn hình
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', // Tạo bóng cho ô
        position: 'relative',
        top: '0rem',
      }}
    >
      <h2 style={{ 
            margin: 0, 
            textAlign: 'center',
            textTransform: 'uppercase',
             }}>
      
            Môn Mạng máy tính</h2>
    </Box>

    <Box
      sx={{
        border: '2px solid rgba(23, 143, 165, 0.5)', // Màu viền của ô
        borderBottom: '10px solid rgba(23, 143, 165, 0.5)', // Viền dưới đậm
        width: '68%',
        padding: '35px', // Khoảng cách giữa viền và nội dung
        borderRadius: '8px', // Bo góc cho ô
        // width: 'fit-content', // Đảm bảo ô có kích thước vừa đủ với nội dung
        margin: '10px auto', // Canh giữa ô trên màn hình
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', // Tạo bóng cho ô
        position: 'relative',
        top: '5rem',
      }}
    >
      <h2 style={{ 
            margin: 0, 
            textAlign: 'center',
            textTransform: 'uppercase',
             }}>
      
            Môn Thiết kế mạng máy tính</h2>
    </Box>
    
    </div>
  );
}
export default CounterFeature;