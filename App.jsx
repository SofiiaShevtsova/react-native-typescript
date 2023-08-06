import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from '@reduxjs/toolkit';
import {Home} from './src/screens/Home/Home';
import {Product} from './src/screens/Product/Product';
import {AddProduct} from './src/screens/AddProduct/AddProduct';
import {Profile} from './src/screens/Profile/Profile';
import {Registration} from './src/screens/Registration/SignUp';
import {Login} from './src/screens/Login/SignIn';
import {constants} from './src/commons/constants';
import {getUser} from './src/redux/selectorAll';

const Stack = createNativeStackNavigator();

const NavigationPrivatRoutes = () => {
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

const NavigationPublicRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Registration"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={constants.ROUTES.LOGIN} component={Login} />
        <Stack.Screen
          name={constants.ROUTES.REGISTRATION}
          component={Registration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const user = useSelector(getUser);
  return <>{user ? <NavigationPrivatRoutes /> : <NavigationPublicRoutes />}</>;
};

export default App;
