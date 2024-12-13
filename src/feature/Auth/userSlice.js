import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi'; // API của bạn
import StorageKeys from 'constants/storage-key'; // Các khóa lưu trữ trong localStorage

// Khởi tạo async thunk cho đăng ký người dùng
export const register = createAsyncThunk(
  'user/register',
  async (payload, { rejectWithValue }) => { //
    try {
      const data = await userApi.register(payload); // Lấy dữ liệu từ API
      localStorage.setItem(StorageKeys.TOKEN, data.jwt);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
      return data.user;  // Trả về user khi thành công
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);  // Trả về lỗi
    }
  }
);


// Khởi tạo async thunk cho đăng nhập người dùng
export const login = createAsyncThunk(
  'user/login',
  async (payload, { rejectWithValue }) => {
    try {
      // Gọi API để đăng nhập
      const data = await userApi.login(payload);

      // Lưu dữ liệu vào localStorage
      localStorage.setItem(StorageKeys.TOKEN, data.jwt);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

      // Trả về thông tin người dùng
      return data.user;
    } catch (error) {
      // Trả về lỗi để xử lý trong rejected case
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Khởi tạo slice cho người dùng
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},  // Chứa thông tin người dùng hoặc giá trị mặc định {}
    status: 'idle',  // Trạng thái ban đầu, có thể là 'idle', 'loading', 'succeeded', 'failed'
    error: null,  // Lưu trữ thông báo lỗi khi đăng ký hoặc đăng nhập thất bại
  },
  reducers: {
    logout(state){
      //Clearlocal storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      state.current = {};
    }
  },  // Các reducer đồng bộ nếu cần
  extraReducers: (builder) => {
    builder
      // Xử lý khi đăng ký thành công
      .addCase(register.fulfilled, (state, action) => {
        state.current = action.payload;  // Lưu thông tin người dùng vào state
        // state.status = 'succeeded';  // Cập nhật trạng thái thành công
        // state.error = null;  // Đảm bảo xóa lỗi cũ nếu có
      })
      // // Xử lý khi đăng ký bị lỗi
      // .addCase(register.rejected, (state, action) => {
      //   state.error = action.payload || action.error.message;  // Lưu thông báo lỗi
      //   state.status = 'failed';  // Cập nhật trạng thái thành thất bại
      // })
      // // Xử lý khi đăng ký đang trong quá trình thực hiện
      // .addCase(register.pending, (state) => {
      //   state.status = 'loading';  // Cập nhật trạng thái thành "loading"
      // })

      // Xử lý khi đăng nhập thành công
      .addCase(login.fulfilled, (state, action) => {
        state.current = action.payload;  // Lưu thông tin người dùng vào state
        state.status = 'succeeded';  // Cập nhật trạng thái thành công
        state.error = null;  // Đảm bảo xóa lỗi cũ nếu có
      })
      // Xử lý khi đăng nhập bị lỗi
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload || action.error.message;  // Lưu thông báo lỗi
        state.status = 'failed';  // Cập nhật trạng thái thành thất bại
      })
      // Xử lý khi đăng nhập đang trong quá trình thực hiện
      .addCase(login.pending, (state) => {
        state.status = 'loading';  // Cập nhật trạng thái thành "loading"
      });
  },
});

// Xuất reducer để kết nối với store
const { reducer } = userSlice;
export default reducer;
