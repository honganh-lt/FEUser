import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../feature/Counter/counterSlice'
import userReducer from '../feature/Auth/userSlice';

const rootReducer = {
    count: counterReducer,
    user: userReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;