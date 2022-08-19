import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Chat } from '../type'

export interface usersState {
    chats: Chat[]
}

const initialState: usersState = {
    chats: []
}

export const usersSlice = createSlice({
    name: 'getChats',
    initialState,
    reducers: {
        setChats: (state, action: PayloadAction<Chat[]>) => {
            state.chats = action.payload;
        },
    },
})

export const { setChats } = usersSlice.actions;

export default usersSlice.reducer;


