import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../type'

export interface usersState {
    users: User[],
    userId: string,
    convUsers: number[]
}

const initialState: usersState = {
    users: [],
    userId: '',
    convUsers: []
}

export const usersSlice = createSlice({
    name: 'getUsers',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
        setConvUsers: (state, action: PayloadAction<number[]>) => {
            state.convUsers = action.payload;
        },
    },
})

export const { setUsers, setUserId ,setConvUsers } = usersSlice.actions;

export default usersSlice.reducer;


