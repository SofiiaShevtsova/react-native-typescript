import {State, User, Product, OneProduct} from '../commons/type';

export const getUser = (state: State): User | null => state.auth.user;
export const isUserFetching = (state: State): boolean =>
  state.auth.isUserFetching;
export const getAllProducts = (state: State): Product[] =>
  state.products.productsList;
export const getCurrentProduct = (state: State): OneProduct | null =>
  state.products.currentProduct;
export const isChanged = (state: State): boolean => state.products.isLoading;
