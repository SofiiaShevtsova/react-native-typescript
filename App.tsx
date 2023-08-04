import React from 'react';
import {StyleSheet, View} from 'react-native';
// import Registration from './Screens/Auth/RegistrationScreen/Registration';
// import Login from './Screens/Auth/LoginScreen/Login';
// import * as Font from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './Screens/Home/Home';
// import Map from './Screens/Home/PostsScreen/MapScreen/MapScreen';
// import Comments from './Screens/Home/PostsScreen/CommentsScreen/CommentsScreen';
// import {store} from './redux/reduxStore';
// import {Provider} from 'react-redux';
// import {useSelector, useDispatch} from 'react-redux';
// import {getEmail, isUserLogin} from './redux/Auth/authSelectors';
// import {getCurrentUser} from './redux/Auth/authOperation';

const Stack = createNativeStackNavigator();

const NavigationBox = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Contact Details" component={Contact} />
        <Stack.Screen name="Add Contact" component={AddContact} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App = () => {
  // const [isReady, setIsReady] = useState(false);

  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  //     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  //   });
  //   setIsReady(true);
  // };

  // useEffect(() => {
  //   loadFonts();
  // }, []);

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
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
