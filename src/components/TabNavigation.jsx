import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {constants} from '../commons/constants';
import {Home} from '../screens/Home/Home';
import {Profile} from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={constants.ROUTES.HOME} component={Home} />
      <Tab.Screen name={constants.ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
