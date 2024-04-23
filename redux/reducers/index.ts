import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from '@/redux/reducers/AuthReducers/index'
import ProductSlice from '@/redux/reducers/ProductReducers/index'
import CartSlice from '@/redux/reducers/CartReducers/index'

const rootReducer = combineReducers({
    auth: LoginSlice,
    product: ProductSlice,
    cart: CartSlice
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer