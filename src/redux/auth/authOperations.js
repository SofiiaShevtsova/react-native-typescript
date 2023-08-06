import {createAsyncThunk} from '@reduxjs/toolkit';

import {apiRequest} from '../../helpers/commons';
import {constants} from '../../commons/constants';

export const signUp = createAsyncThunk(
  constants.ACTIONS.SIGN_UP,
  async (newUser, {rejectWithValue}) => {
    try {
      const {
        token,
        user: {fullName, email, id},
      } = await apiRequest.postRequest(
        constants.REQUEST_API.AUTH + '/sign-up',
        newUser,
      );
      apiRequest.setToken(token);

      return {fullName, email, id};
    } catch (error) {
      return rejectWithValue(error.status);
    }
  },
);

export const logIn = createAsyncThunk(
  constants.ACTIONS.SIGN_IN,
  async (exixtsUser, {rejectWithValue}) => {
    try {
      const {
        token,
        user: {fullName, email, id},
      } = await apiRequest.postRequest(
        constants.REQUEST_API.AUTH + '/sign-in',
        exixtsUser,
      );
      apiRequest.setToken(token);

      return {fullName, email, id};
    } catch (error) {
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
      const {fullName, email, id} = await apiRequest.getRequest(
        constants.REQUEST_API.AUTH + '/authenticated-user',
      );
      return {fullName, email, id};
    } catch (error) {
      return rejectWithValue(error.status);
    }
  },
);
