import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {getAllProducts, addProduct, removeProduct} from './productsOperations';
import {ProductSliceState} from '../../commons/type';

const initialState: ProductSliceState = {
  productsList: [],
  isLoading: false,
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
        state => {
          state.isLoading = false;
        },
      );
  },
});

export default productsSlice.reducer;
