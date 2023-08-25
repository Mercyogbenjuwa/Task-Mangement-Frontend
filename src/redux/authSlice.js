import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  authToken: localStorage.getItem("authToken"), 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.authToken = action.payload;
      localStorage.setItem("authToken", action.payload); 
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
