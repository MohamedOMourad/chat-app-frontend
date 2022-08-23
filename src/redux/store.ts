import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './auth';
import usersReducer from './users';
import chatsReducer from './chats';
import messagesReducer from './messages';
export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        users: usersReducer,
        chats: chatsReducer,
        messages: messagesReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch