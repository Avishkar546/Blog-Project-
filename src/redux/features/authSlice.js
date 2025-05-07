import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedin: false,
        // jwt: '',
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedin = true;
            state.user = action.payload.user
        },

        logout: (state) => {
            state.isLoggedin = false;
            state.user = null
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;