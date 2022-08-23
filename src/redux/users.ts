import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../type'

export interface usersState {
    users: User[],
    convUsers: number[]
}

const initialState: usersState = {
    users: [],
    convUsers: []
}

export const usersSlice = createSlice({
    name: 'getUsers',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        setConvUsers: (state, action: PayloadAction<number[]>) => {
            state.convUsers = action.payload;
        },
    },
})

export const { setUsers, setConvUsers } = usersSlice.actions;

export default usersSlice.reducer;


