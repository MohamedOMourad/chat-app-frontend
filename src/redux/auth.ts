import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface authenticationState {
    authenticated: boolean
}

const initialState: authenticationState = {
    authenticated: localStorage.getItem('token') ? true : false
}

export const counterSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        isLogin: (state) => {
            state.authenticated = true
        },
        isLogout: (state) => {
            state.authenticated = false
            localStorage.removeItem('token')
        },
    },
})

// Action creators are generated for each case reducer function
export const { isLogin, isLogout } = counterSlice.actions

export default counterSlice.reducer


