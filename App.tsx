import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/screens/Home/Home';
import {Contact} from './src/screens/Contact/Contact';
import {AddContact} from './src/screens/AddContactForm/AddContact';

const Stack = createNativeStackNavigator();

const NavigationBox = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Contact Details" component={Contact} />
        <Stack.Screen name="Add Contact" component={AddContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <>
      <View style={styles.container} /> : <NavigationBox />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
