import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// export interface authenticationState {
//     authenticated: boolean
// }
const local = localStorage.getItem('auth')
const initialState: { authenticated: boolean, token: string } = local === null ? {
    authenticated: false,
    token: ''
} : JSON.parse(localStorage.getItem("auth")!)


export const counterSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        isLogin: (state, action: PayloadAction<{ token: string }>) => {
            state.authenticated = true;
            state.token = action.payload.token
        },
        isLogout: (state) => {
            state.authenticated = false;
            state.token = "";
            localStorage.removeItem("auth")
        },
    },
})

// Action creators are generated for each case reducer function
export const { isLogin, isLogout } = counterSlice.actions;

export default counterSlice.reducer;


