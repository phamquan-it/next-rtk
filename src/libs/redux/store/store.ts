import { configureStore,  combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { commonApi } from '../api/common.api';
import { platformApi } from './example/platform.enpoints';
import { authApi } from '../api/auth.api';


const preloadedState = {};

const rootReducer = combineReducers({
    [commonApi.reducerPath]: commonApi.reducer,
    [platformApi.reducerPath]: platformApi.reducer,
    [authApi.reducerPath]: authApi.reducer
})
//configuration store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare)=> 
        getDefaultMiddleWare().concat(
            commonApi.middleware,
            platformApi.middleware,
            authApi.middleware
        ),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
//export dispatch
export const useAppDispatch = ()=> useDispatch<AppDispatch>();
export const useAppSelector:  TypedUseSelectorHook<RootState> = useSelector;