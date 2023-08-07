import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {logIn, signUp, logOut, getCurrentUser} from './authOperations';
import {UserSliceState} from '../../commons/type';

const initialState: UserSliceState = {
  user: null,
  isUserFetching: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.isUserFetching = false;
      })
      .addCase(logOut.rejected, state => {
        state.isUserFetching = false;
      });

    builder
      .addMatcher(
        isAnyOf(
          signUp.pending,
          logIn.pending,
          getCurrentUser.pending,
          logOut.pending,
        ),
        state => {
          state.isUserFetching = true;
        },
      )
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled, getCurrentUser.fulfilled),
        (state, {payload}) => {
          state.user = payload;
          state.isUserFetching = false;
        },
      )
      .addMatcher(
        isAnyOf(signUp.rejected, logIn.rejected, getCurrentUser.rejected),
        state => {
          state.user = null;
          state.isUserFetching = false;
        },
      );
  },
});

export default authSlice.reducer;
