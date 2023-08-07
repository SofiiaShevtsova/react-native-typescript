import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiRequest} from '../../services/apiServices';
import {constants} from '../../commons/constants';
import {AddProductType, Product, State} from '../../commons/type';

export const getAllProducts = createAsyncThunk(
  constants.ACTIONS.GET_PRODUCTS,
  async (_, {rejectWithValue}) => {
    try {
      const list = await apiRequest.getRequest(constants.REQUEST_API.PRODUCTS);
      return list;
    } catch (error: any) {
      return rejectWithValue(error.status);
    }
  },
);

export const addProduct = createAsyncThunk(
  constants.ACTIONS.ADD_PRODUCT,
  async (product: AddProductType, {rejectWithValue, getState}) => {
    try {
      const {products}: State = getState() as State;
      const newProduct: Product = await apiRequest.postRequest(
        constants.REQUEST_API.PRODUCTS,
        product,
      );
      const list: Product[] = [...products.productsList, newProduct];
      return list;
    } catch (error: any) {
      return rejectWithValue(error.status);
    }
  },
);

export const removeProduct = createAsyncThunk(
  constants.ACTIONS.REMOVE_PRODUCT,
  async (productId: string, {rejectWithValue, getState}) => {
    try {
      await apiRequest.deleteRequest(
        constants.REQUEST_API.PRODUCTS + '/' + productId,
      );
      const {products}: State = getState() as State;
      const newList: Product[] = products.productsList.filter(
        (product: Product): boolean => product.id !== productId,
      );
      return newList;
    } catch (error: any) {
      return rejectWithValue(error.status);
    }
  },
);
