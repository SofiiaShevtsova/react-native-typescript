import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {logIn, signUp, logOut, getCurrentUser} from './authOperations';

const pending = state => {
  state.isUserFetching = true;
};
const finished = state => {
  state.isUserFetching = false;
};

const initialState = {
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
        finished(state);
      })
      .addCase(logOut.rejected, state => {
        finished(state);
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
          pending(state);
        },
      )
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled, getCurrentUser.fulfilled),
        (state, {payload}) => {
          state.user = payload;
          finished(state);
        },
      )
      .addMatcher(
        isAnyOf(signUp.rejected, logIn.rejected, getCurrentUser.rejected),
        state => {
          state.user = null;
          finished(state);
        },
      );
  },
});

export default authSlice.reducer;
