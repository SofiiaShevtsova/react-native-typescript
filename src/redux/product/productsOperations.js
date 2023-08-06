import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiRequest} from '../../services/apiServices';
import {constants} from '../../commons/constants';

export const getAllProducts = createAsyncThunk(
  constants.ACTIONS.GET_PRODUCTS,
  async (_, {rejectWithValue}) => {
    try {
      const list = await apiRequest.getRequest(constants.REQUEST_API.PRODUCTS);
      return list;
    } catch (error) {
      return rejectWithValue(error.status);
    }
  },
);

export const addProduct = createAsyncThunk(
  constants.ACTIONS.ADD_PRODUCT,
  async (product, {rejectWithValue, getState}) => {
    try {
      const {products} = getState();
      const newProduct = await apiRequest.postRequest('/products', product);
      const list = [...products.productsList, newProduct];
      return list;
    } catch (error) {
      return rejectWithValue(error.status);
    }
  },
);

export const removeProduct = createAsyncThunk(
  constants.ACTIONS.REMOVE_PRODUCT,
  async (productId, {rejectWithValue, getState, dispatch}) => {
    try {
      await apiRequest.deleteRequest(
        constants.REQUEST_API.PRODUCTS + '/' + productId,
      );
      const {products} = getState();
      const newList = products.productsList.filter(
        product => product.id !== productId,
      );
      return newList;
    } catch (error) {
      return rejectWithValue(error.status);
    }
  },
);
