import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {constants} from '../commons/constants';
import {Profile} from '../screens/Profile/Profile';
import {NavigationPrivatRoutes} from './PrivatRoute';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 60,
          paddingTop: 10,
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: '#000000',
        tabBarItemStyle: {
          height: 40,
        },
      }}>
      <Tab.Screen
        name={constants.ROUTES.HOME_MAIN}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" color={color} size={30} />
          ),
        }}
        component={NavigationPrivatRoutes}
      />
      <Tab.Screen
        name={constants.ROUTES.PROFILE}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" color={color} size={30} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};
