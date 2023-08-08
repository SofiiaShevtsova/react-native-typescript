import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {constants} from '../commons/constants';
import {Profile} from '../screens/Profile/Profile';
import {NavigationPrivatRoutes} from './PrivatRoute';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={constants.ROUTES.HOME}
        options={{headerShown: false}}
        component={NavigationPrivatRoutes}
      />
      <Tab.Screen name={constants.ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
