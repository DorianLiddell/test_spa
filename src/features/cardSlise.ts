import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../types/Post';

interface CardsState {
    posts: Post[];
}

const initialState: CardsState = {
    posts: [],
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<Post[]>) {
            state.posts = action.payload;
        },
        toggleLike(state, action: PayloadAction<number>) {
            const post = state.posts.find(post => post.id === action.payload);
            if (post) {
                post.liked = !post.liked;
            }
        },
        removeCard(state, action: PayloadAction<number>) {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
    },
});

export const { setPosts, toggleLike, removeCard } = cardsSlice.actions;
export default cardsSlice.reducer;


