import { AUTOLIVE_URL } from '@/libs/redux/api/constants/api.constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PlatformModel } from '../models/platform.model';
const getToken = () => {
    // For example, you might get the token from localStorage or a state management store
    return localStorage.getItem('authToken') || '';
};

export const commonPlatformApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: AUTOLIVE_URL,
        prepareHeaders: headers => {
            headers.set('Content-Type', 'application/json;charset=UTF-8');
            const token = getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Platform'],
    endpoints: _ => ({}),
});