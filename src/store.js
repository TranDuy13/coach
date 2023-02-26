import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/features/user/userSlice"
const store = configureStore({
    reducer:{
        user: userReducer,
    }
})
export default store;

//getProduct - trang chủ (home) - trang danh mục sản phẩm- trang loại sản phẩm- lấy thông tin sản phẩm- trang thái đơn hàng