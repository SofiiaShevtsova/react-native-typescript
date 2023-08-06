import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {getAllProducts, addProduct, removeProduct} from './productsOperations';

const initialState = {
  productsList: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(
          getAllProducts.fulfilled,
          addProduct.fulfilled,
          removeProduct.fulfilled,
        ),
        (state, {payload}) => {
          state.productsList = payload;
          state.isLoading = false;
        },
      )

      .addMatcher(
        isAnyOf(
          getAllProducts.pending,
          addProduct.pending,
          removeProduct.pending,
        ),
        state => {
          state.isLoading = false;
        },
      )
      .addMatcher(
        isAnyOf(
          getAllProducts.rejected,
          addProduct.rejected,
          removeProduct.rejected,
        ),
        (state, {payload}) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});

export default productsSlice.reducer;
