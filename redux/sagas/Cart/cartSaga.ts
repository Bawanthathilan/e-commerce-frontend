"use client"
import {put , call , CallEffect , PutEffect} from 'redux-saga/effects'
import {PayloadAction} from '@reduxjs/toolkit'

import { STATUS_CODE } from '@/constants'

import {addToCart ,getCart} from '@/api/endpoints/service'
import {addToCartSuccess , addToCartFailure , getCartSuccess , getCartFailure} from '@/redux/reducers/CartReducers/index'


export function* handleAddToCart(action:PayloadAction<any>):Generator<CallEffect|PutEffect , void , unknown>{
    try {
        const response: any = yield call(addToCart , action.payload);
        const {status , data} = response;
        if(status != STATUS_CODE.SUCCESS){
            throw new Error("something went wrong")
        }
        yield put(addToCartSuccess(data))
    } catch (error:any) {
        yield put(addToCartFailure(error?.message))
    }
}

export function* handleGetCart(action:PayloadAction<any>):Generator<CallEffect|PutEffect , void , unknown>{
    try {
        const response: any = yield call(getCart);
        const {status , data} = response;
        if(status != STATUS_CODE.SUCCESS){
            throw new Error("something went wrong")
        }
        yield put(getCartSuccess(data))
    } catch (error:any) {
        yield put(getCartFailure(error?.message))
    }
}