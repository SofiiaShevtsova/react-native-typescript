import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home/Home';
import {Product} from '../screens/Product/Product';
import {AddProduct} from '../screens/AddProduct/AddProduct';
import {constants} from '../commons/constants';

const Stack = createNativeStackNavigator();

export const NavigationPrivatRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={constants.ROUTES.HOME} component={Home} />
      <Stack.Screen name={constants.ROUTES.PRODUCT} component={Product} />
      <Stack.Screen
        name={constants.ROUTES.ADD_PRODUCT}
        component={AddProduct}
      />
    </Stack.Navigator>
  );
};
