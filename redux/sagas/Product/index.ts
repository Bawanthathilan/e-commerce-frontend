import {takeLatest} from 'redux-saga/effects'

import { getAllProductRequest } from '@/redux/reducers/ProductReducers'

import { handleGetAllProducts } from './productSaga'

export default function* productSaga(){
    yield takeLatest(getAllProductRequest.type , handleGetAllProducts);
}