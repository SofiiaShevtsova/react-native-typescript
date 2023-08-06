import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/screens/Home/Home';
import {Product} from './src/screens/Product/Product';
import {AddProduct} from './src/screens/AddProduct/AddProduct';
import {Profile} from './src/screens/Profile/Profile';
import {constants} from './src/commons/constants';

const Stack = createNativeStackNavigator();

export const NavigationPrivatRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={constants.ROUTES.HOME}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name={constants.ROUTES.PRODUCT} component={Product} />
        <Stack.Screen
          name={constants.ROUTES.ADD_PRODUCT}
          component={AddProduct}
        />
        <Stack.Screen name={constants.ROUTES.PROFILE} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
