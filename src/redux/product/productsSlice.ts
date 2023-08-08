import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {
  getAllProducts,
  addProduct,
  removeProduct,
  getOneProduct,
} from './productsOperations';
import {ProductSliceState} from '../../commons/type';

const initialState: ProductSliceState = {
  productsList: [],
  currentProduct: null,
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOneProduct.fulfilled, (state, {payload}) => {
      state.currentProduct = payload;
      state.isLoading = false;
    });
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
          getOneProduct.pending,
        ),
        state => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        isAnyOf(
          getAllProducts.rejected,
          addProduct.rejected,
          removeProduct.rejected,
          getOneProduct.rejected,
        ),
        state => {
          state.isLoading = false;
          state.currentProduct = null;
        },
      );
  },
});

export default productsSlice.reducer;
