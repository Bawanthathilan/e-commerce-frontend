import {put , call , CallEffect , PutEffect} from 'redux-saga/effects'
import {PayloadAction} from '@reduxjs/toolkit'

import { STATUS_CODE } from '@/constants'

import {getAllProducts} from '@/api/endpoints/service'
import {getAllProductSuccess , getAllProductFailure} from '@/redux/reducers/ProductReducers/index'

export function* handleGetAllProducts(action:PayloadAction<any>):Generator<CallEffect|PutEffect , void , unknown>{
    try {
        const response: any = yield call(getAllProducts , action.payload);
        const {status , data} = response;
        if(status != STATUS_CODE.SUCCESS){
            throw new Error("something went wrong")
        }
        yield put(getAllProductSuccess(data))
    } catch (error:any) {
        yield put(getAllProductFailure(error?.message))
    }
}