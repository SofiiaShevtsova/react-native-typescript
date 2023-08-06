interface Constants {
  ROUTES: {
    HOME: string;
    REGISTRATION: string;
    LOGIN: string;
    PRODUCT: string;
    ADD_PRODUCT: string;
    PROFILE: string;
  };
  REQUEST_API: {
    BASE_URL: string;
    AUTH: string;
    PRODUCTS: string;
    IMAGES: string;
  };
  ACTIONS: {
    SIGN_UP: string;
    SIGN_IN: string;
    GET_USER: string;
    LOG_OUT: string;
    GET_PRODUCTS: string;
    GET_ONE_PRODUCT: string;
    ADD_PRODUCT: string;
    REMOVE_PRODUCT: string;
  };
}

export const constants: Constants = {
  ROUTES: {
    HOME: 'Home',
    REGISTRATION: 'Sign up',
    LOGIN: 'Sign in',
    PRODUCT: 'Product Details',
    ADD_PRODUCT: 'Add Product',
    PROFILE: 'Profile',
  },
  REQUEST_API: {
    BASE_URL: 'https://rn.binary-travel-app.xyz/api/v1',
    AUTH: '/auth',
    PRODUCTS: '/products',
    IMAGES: '/images',
  },
  ACTIONS: {
    SIGN_UP: 'auth/sign-up',
    SIGN_IN: 'auth/sing-in',
    GET_USER: 'auth/get-current-user',
    LOG_OUT: 'auth/log-out',
    GET_PRODUCTS: 'products/get-all',
    GET_ONE_PRODUCT: 'products/get-one',
    ADD_PRODUCT: 'products/add-one',
    REMOVE_PRODUCT: 'products/remove-one',
  },
};
