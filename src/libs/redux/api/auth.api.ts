import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTOLIVE_URL } from './constants/api.constant';
import { Login, Register } from '../models/auth.model';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: AUTOLIVE_URL }),
    endpoints: (builder) => ({
        login: builder.mutation<{ token: string }, Login>({
            query: (credentials) => ({
                url: '/auth/login?language=vi',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation<{ token: string }, Register>({
            query: (register) => ({
                url: '/auth/register?language=vi',
                method: 'POST',
                body: register,
            }),
        }),
        forgot: builder.mutation<{ value: string }, {email: string}>({
            query: (forgot) => ({
                url: '/auth/forgot?language=vi',
                method: 'POST',
                body: forgot,
            }),
        }),
        refreshToken: builder.mutation<{ value: string }, {email: string}>({
            query: (refresh) => ({
                url: '/auth/refresh?language=vi',
                method: 'POST',
                body: refresh,
            }),
        })
    }),
});

export const { 
    useLoginMutation,  
    useRegisterMutation, 
    useForgotMutation, 
    useRefreshTokenMutation  
} = authApi;
