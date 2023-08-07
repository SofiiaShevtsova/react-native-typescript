import {store} from '../redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type State = ReturnType<typeof store.getState>;

export type NavigationProps = {
  navigation: NativeStackNavigationProp<any>;
};

export type ProductSliceState = {
  productsList: Product[] | never[];
  isLoading: boolean;
};

export type UserSliceState = {
  user: User | null;
  isUserFetching: boolean;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  preview: string;
  createdAt: string;
};

export type AddProductType = {
  title: string;
  description: string;
  preview: string;
};

export type User = {
  id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  createdAt?: string;
};
