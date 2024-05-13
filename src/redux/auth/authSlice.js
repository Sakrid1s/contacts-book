import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOps';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
