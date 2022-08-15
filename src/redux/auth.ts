import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface authenticationState {
    authenticated: boolean
}

const initialState: authenticationState = {
    authenticated: false
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
        },
    },
})

// Action creators are generated for each case reducer function
export const { isLogin, isLogout } = counterSlice.actions

export default counterSlice.reducer


            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes