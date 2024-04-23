import {all} from 'redux-saga/effects'
import authSaga from './Auth'
import productSaga from './Product'


export default function* rootSaga(){
    yield all([
        authSaga(),
        productSaga()
    ])
}