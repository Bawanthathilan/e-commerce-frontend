import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface iCartState{
    addToCartLoading: boolean;
    addToCartError: any;

    getCartLoading: boolean
    getCartError: any;
    cartItems: any[];

}

const initialState: iCartState={
    addToCartLoading: false,
    addToCartError:null,

    getCartLoading: false,
    getCartError:null,
    cartItems:[],
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCartRequest:(state , action:PayloadAction<any>)=>{
            state.addToCartLoading = true;
            state.addToCartError = null;
        },
        addToCartSuccess:(state , action:PayloadAction<any>)=>{
            state.addToCartLoading = false;
            state.addToCartError = null;
        },
        addToCartFailure:(state , action:PayloadAction<any>)=>{
            state.addToCartLoading = true;
            state.addToCartError = action.payload;
        },

        getCartRequest:(state)=>{
            state.getCartLoading = true;
            state.getCartError = null;
        },

        getCartSuccess:(state , action:PayloadAction<any>)=>{
            state.getCartLoading = false;
            state.getCartError = null;
            state.cartItems = action.payload
        },
        getCartFailure:(state , action:PayloadAction<any>)=>{
            state.getCartLoading = true;
            state.getCartError = action.payload;
        },
       
    }
})

export const {
    addToCartRequest,
    addToCartSuccess,
    addToCartFailure,
    getCartRequest,
    getCartSuccess,
    getCartFailure
} = cartSlice.actions;

export default cartSlice.reducer;