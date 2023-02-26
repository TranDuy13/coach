import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
const a= JSON.parse(localStorage.getItem("user"))

const initialState={
    user: a? a: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:""
}


export const login = createAsyncThunk(
    "user/login",
    async(data,thunkAPI)=>{
        try {
            return userService.login(data)
        } catch (error) {
            const message =
            (error.respone&&error.respone.data&&error.respone.data.message)||error.message|| error.toString()
         return thunkAPI.rejectWithValue(message)
        }
    }
)
export const getUser = createAsyncThunk(
    "user/getUser",
    async(_,thunkAPI)=>{
        try {
            return userService.getUser()
        } catch (error) {
            const message =
            (error.respone&&error.respone.data&&error.respone.data.message)||error.message|| error.toString()
         return thunkAPI.rejectWithValue(message)
        }
    }
)
export const logout = createAsyncThunk(
    "user/logout",
    async(_,thunkAPI)=>{
        try {
            return userService.logout()
        } catch (error) {
            const message =
            (error.respone&&error.respone.data&&error.respone.data.message)||error.message|| error.toString()
         return thunkAPI.rejectWithValue(message)
        }
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        reset: (state)=>{
            state.isError=false;
            state.isLoading=false;
            state.isSuccess=false;
            state.message='';
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending, (state)=>{
            state.isLoading= true
        }).addCase(login.fulfilled,(state,action)=>{
            state.isSuccess= true;
            state.isLoading=false
            state.user=action.payload;//response trả về (promise)
            state.message=action.payload//setMessage(res.data)
        }). addCase(login.rejected, (state,action)=>{
            state.isError=true;
            state.message=action.payload;
            state.user=null
        })
    }
})
export const {reset} = userSlice.actions
export default userSlice.reducer
// pending: đang chờ(bắt buộc đi đầu tiên)-> thực hiện (thành công-- fullfilled||có lỗi xảy ra-rejected)