import React from 'react';
import {useSelector} from '@reduxjs/toolkit';
import {
  NavigationPublicRoutes,
  NavigationPrivatRoutes,
} from './src/components/commons';
import {getUser} from './src/redux/selectorAll';

const App = () => {
  const user = useSelector(getUser);
  return <>{user ? <NavigationPrivatRoutes /> : <NavigationPublicRoutes />}</>;
};

export default App;
