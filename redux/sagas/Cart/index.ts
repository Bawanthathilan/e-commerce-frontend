import {takeLatest} from 'redux-saga/effects'

import { addToCartRequest , getCartRequest} from '@/redux/reducers/CartReducers'

import { handleAddToCart , handleGetCart  } from './cartSaga'

export default function* cartSaga(){
    yield takeLatest(addToCartRequest.type , handleAddToCart);
    yield takeLatest(getCartRequest.type , handleGetCart)
}