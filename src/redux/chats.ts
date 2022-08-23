import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Chat } from '../type'

export interface ChatsState {
    chats: Chat[]
}

const initialState: ChatsState = {
    chats: []
}

export const ChatsSlice = createSlice({
    name: 'getChats',
    initialState,
    reducers: {
        setChats: (state, action: PayloadAction<Chat[]>) => {
            state.chats = action.payload;
        },
    },
})

export const { setChats } = ChatsSlice.actions;

export default ChatsSlice.reducer;


