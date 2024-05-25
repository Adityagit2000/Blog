import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    usesData : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        login: (state, action) => {
            state.status = true;
            state.usesData = action.payload.usesData;
        },
        logout: (state) => {
            state.status = false;
            state.usesData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;