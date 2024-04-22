import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from '@/redux/reducers/AuthReducers/index'

const rootReducer = combineReducers({
    auth: LoginSlice
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer