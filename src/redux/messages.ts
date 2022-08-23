import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Message } from '../type';



export interface MessagesState {
    messages: Message[]
}

const initialState: MessagesState = {
    messages: []
}

export const MessagesSlice = createSlice({
    name: 'getMessages',
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<Message[]>) => {
            state.messages = action.payload;
        },
        addToMessages: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        }
    },
})

export const { setMessages, addToMessages } = MessagesSlice.actions;

export default MessagesSlice.reducer;


