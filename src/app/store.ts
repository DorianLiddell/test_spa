import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../services/posts';
import cardsReducer from '../features/cardSlise';

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer, 
        cards: cardsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


