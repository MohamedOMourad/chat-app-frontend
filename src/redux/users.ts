import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../type'

export interface usersState {
    users: User[]
}

const initialState: usersState = {
    users: []
}

export const usersSlice = createSlice({
    name: 'getUsers',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
    },
})

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;


