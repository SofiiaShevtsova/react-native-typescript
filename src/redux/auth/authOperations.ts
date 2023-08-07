import {createAsyncThunk} from '@reduxjs/toolkit';

import {apiRequest} from '../../services/apiServices';
import {constants} from '../../commons/constants';
import {User} from '../../commons/type';

export const signUp = createAsyncThunk(
  constants.ACTIONS.SIGN_UP,
  async (newUser: User, {rejectWithValue}) => {
    try {
      const {token, user}: {token: string; user: User} =
        await apiRequest.postRequest(
          constants.REQUEST_API.AUTH + '/sign-up',
          newUser,
        );
      apiRequest.setToken(token);

      return user;
    } catch (error: any) {
      return rejectWithValue(error.status);
    }
  },
);

export const logIn = createAsyncThunk(
  constants.ACTIONS.SIGN_IN,
  async (exixtsUser: {email: string; password: string}, {rejectWithValue}) => {
    try {
      const {token, user}: {token: string; user: User} =
        await apiRequest.postRequest(
          constants.REQUEST_API.AUTH + '/sign-in',
          exixtsUser,
        );
      apiRequest.setToken(token);

      return user;
    } catch (error: any) {
      return rejectWithValue(error.status);
    }
  },
);

export const logOut = createAsyncThunk(constants.ACTIONS.LOG_OUT, () => {
  apiRequest.setToken('');
  return true;
});

export const getCurrentUser = createAsyncThunk(
  constants.ACTIONS.GET_USER,
  async (_, {rejectWithValue}) => {
    try {
      const user: User = await apiRequest.getRequest(
        constants.REQUEST_API.AUTH + '/authenticated-user',
      );
      return user;
    } catch (error: any) {
      return rejectWithValue(error.status);
    }
  },
);
