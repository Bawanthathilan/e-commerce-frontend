"use client"
import {put , call , CallEffect , PutEffect} from 'redux-saga/effects'
import {PayloadAction} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { STATUS_CODE } from '@/constants'

import {login} from '@/api/endpoints/service'
import {loginSuccess , loginFailure} from '@/redux/reducers/AuthReducers/index'


export function* handleLogin(action:PayloadAction<any>):Generator<CallEffect|PutEffect , void , unknown>{
    try {
        const response: any = yield call(login , action.payload);
        const {status , data} = response;
        if(status != STATUS_CODE.SUCCESS){
            throw new Error("something went wrong")
        }
        yield put(loginSuccess(data))
    } catch (error:any) {
        yield put(loginFailure(error?.message))
    }
}