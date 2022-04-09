import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    isSuccess: false,
    successMessage: null,
    isFailed: false,
    error: null,
  },
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
    register: (state) => {},
    profile: (state, action) => {},
  },
});

export const { login, register, profile } = userSlice.actions;

export default userSlice.reducer;
