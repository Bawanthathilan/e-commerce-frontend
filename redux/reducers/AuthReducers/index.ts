import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface iAuthState{
    loading: boolean;
    error:any;
    loginData:any,
    isLogin:boolean,
    isAdmin:boolean,
    token:any
}

const initialState: iAuthState={
    loading: false,
    loginData:[],
    error:null,
    isLogin:false,
    isAdmin:false,
    token:null

}


const loginSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginRequest:(state , action:PayloadAction<any>)=>{
            state.loading = true;
            state.error = null;
        },
        loginSuccess:(state , action:PayloadAction<any>)=>{
            state.loading = false;
            state.loginData = action.payload;
            state.isLogin = true;
            state.token = action.payload.token
            if(action.payload.user.role ==='ADMIN'){
                state.isAdmin = true
            }else{
                state.isAdmin = false
            }

        },

        loginFailure:(state , action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
            state.loginData = []
            state.isLogin = false
            state.token = null
            state.isAdmin = false
        },

        logoutRequest:(state)=>{
            state.isLogin = false
            state.isAdmin = false
        }
    }
})

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutRequest
} = loginSlice.actions;

export default loginSlice.reducer;