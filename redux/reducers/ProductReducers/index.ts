import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface iProductState{
    listAllProductloading: boolean;
    listAllError:any;
    listAllProductsData:any[]
}

const initialState: iProductState={
    listAllProductloading: false,
    listAllProductsData:[],
    listAllError:null
}


const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getAllProductRequest:(state)=>{
            state.listAllProductloading = true;
            state.listAllError = null;
        },
        getAllProductSuccess:(state , action:PayloadAction<any>)=>{
            state.listAllProductloading = false;
            state.listAllProductsData = action.payload;
        },

        getAllProductFailure:(state , action:PayloadAction<any>)=>{
            state.listAllProductloading = false;
            state.listAllError = action.payload;
            state.listAllProductsData = []

        }
    }
})

export const {
    getAllProductRequest,
    getAllProductSuccess,
    getAllProductFailure
} = productSlice.actions;

export default productSlice.reducer;