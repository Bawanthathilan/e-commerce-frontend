import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from '@/redux/reducers/AuthReducers/index'
import ProductSlice from '@/redux/reducers/ProductReducers/index'

const rootReducer = combineReducers({
    auth: LoginSlice,
    product: ProductSlice
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer