import { BASE_URL } from '@/libs/redux/api/constants/api.constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const commonApi = createApi({
    reducerPath: 'platform',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: headers => {
            headers.set('Content-Type', 'application/json;charset=UTF-8');
            headers.set('Authorization', 'anonymous');

            return headers;
        },
    }),
    tagTypes: ['Example'],
    endpoints: _ => ({}),
});