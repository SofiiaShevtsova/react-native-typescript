import React from 'react';
import {useSelector, Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationPublicRoutes, TabsNavigation} from './src/components/commons';
import {getUser} from './src/redux/selectorAll';
import {store} from './src/redux/store';

const App = () => {
  const user = useSelector(getUser);
  return (
    <Provider store={store}>
      {user ? (
        <NavigationContainer>
          <TabsNavigation />
        </NavigationContainer>
      ) : (
        <NavigationPublicRoutes />
      )}
    </Provider>
  );
};

export default App;
