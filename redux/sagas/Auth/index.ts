import {takeLatest} from 'redux-saga/effects'

import { loginRequest } from '@/redux/reducers/AuthReducers'

import { handleLogin } from './authSaga'

export default function* authSaga(){
    yield takeLatest(loginRequest.type , handleLogin);
}