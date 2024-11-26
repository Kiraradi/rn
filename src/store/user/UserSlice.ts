import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState, UserType} from '../types';

const initialState: UserState = {
  user: null,
  pending: true,
  hasError: false,
};

export const UserSlise = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, payload: PayloadAction<UserType | null>) {
      const user = payload.payload;
      state.user = user;
    },
    logOut(state) {
      state.user = null;
    },
    changePending(state, payload: PayloadAction<boolean>) {
      state.pending = payload.payload;
    },
  },
});

export default UserSlise.reducer;
export const {logOut, addUser, changePending} = UserSlise.actions;
