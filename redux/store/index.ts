import createSagaMiddleware from 'redux-saga'
import {configureStore , Middleware , AnyAction} from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger'

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger() as Middleware<AnyAction>

const middlewares: Middleware[] = [sagaMiddleware];
middlewares.push(logger);


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({thunk:false}).concat(middlewares)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;