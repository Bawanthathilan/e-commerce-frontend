import {all} from 'redux-saga/effects'
import authSaga from './Auth'
import productSaga from './Product'
import cartSaga from './Cart'


export default function* rootSaga(){
    yield all([
        authSaga(),
        productSaga(),
        cartSaga()
    ])
}