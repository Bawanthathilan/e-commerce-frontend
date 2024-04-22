import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface iAuthState{
    loading: boolean;
    error:any;
    loginData:any
}

const initialState: iAuthState={
    loading: false,
    loginData:[],
    error:null
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
        },

        loginFailure:(state , action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
            state.loginData = []

        }
    }
})

export const {
    loginRequest,
    loginSuccess,
    loginFailure
} = loginSlice.actions;

export default loginSlice.reducer;