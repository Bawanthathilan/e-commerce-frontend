import createSagaMiddleware from 'redux-saga'
import {configureStore , Middleware , AnyAction} from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger() as Middleware<AnyAction>

const middlewares: Middleware[] = [sagaMiddleware];
middlewares.push(logger);


const persistConfig = {
    key: 'root',
    storage, // defaults to localStorage for web
    blacklist: ['Auth'], // add any reducers you don't want to persist here
  };
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({thunk:false}).concat(middlewares)
})

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;