import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/Post';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'posts',
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;

