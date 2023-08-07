import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Registration} from '../screens/Registration/SignUp';
import {Login} from '../screens/Login/SignIn';
import {constants} from '../commons/constants';

const Stack = createNativeStackNavigator();

export const NavigationPublicRoutes = () => {
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