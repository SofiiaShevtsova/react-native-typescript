import {Container} from '../../components/commons';
import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  FlatList,
  Alert,
  DeviceEventEmitter,
  NativeEventEmitter,
  PermissionsAndroid,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  // SafeAreaView,
  // StatusBar,
  // StyleSheet,
} from 'react-native';
import Kontakt, {KontaktModule} from 'react-native-kontaktio';
const {
  connect,
  init,
  startDiscovery,
  startRangingBeaconsInRegion,
  startScanning,
} = Kontakt;
import {ContactItem} from './ContactItem';
const kontaktEmitter = new NativeEventEmitter(KontaktModule);

const isAndroid = Platform.OS === 'android';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'This example app needs to access your location in order to use bluetooth beacons.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

const beaconSetup = (setContacts: any): any => {
  return async () => {
    if (isAndroid) {
      const granted = await requestLocationPermission();
      if (granted) {
        await connect();
        await startScanning();
      } else {
        Alert.alert(
          'Permission error',
          'Location permission not granted. Cannot scan for beacons',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }
    } else {
      await init();
      await startDiscovery();
      await startRangingBeaconsInRegion({
        identifier: '',
        uuid: 'A4826DE4-1EA9-4E47-8321-CB7A61E4667E',
        major: 1,
        minor: 34,
      });
    }

    if (isAndroid) {
      DeviceEventEmitter.addListener(
        'beaconsDidUpdate',
        ({beacons, region}) => {
          console.log('beaconsDidUpdate', {beacons, region});
        },
      );
    } else {
      kontaktEmitter.addListener('didDiscoverDevices', ({beacons}) => {
        console.log('didDiscoverDevices', {beacons});
        setContacts(beacons);
      });

      kontaktEmitter.addListener('didRangeBeacons', ({beacons, region}) => {
        console.log('didRangeBeacons', {beacons, region});
      });
    }
  };
};

export const Home = ({navigation}: {navigation: any}) => {
  const [contactsList, setContactsList] = useState([]);
  const [nameForFins, setName] = useState('');

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    () => {
      Promise.resolve().then(beaconSetup(setContactsList));

      return () => {
        if (isAndroid) {
          kontaktEmitter.removeAllListeners('beaconsDidUpdate');
        } else {
          kontaktEmitter.removeAllListeners('didDiscoverDevices');
          kontaktEmitter.removeAllListeners('didRangeBeacons');
        }
      };
    };
  }, []);

  return (
    <Container>
      <View>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View>
              <TextInput
                placeholder="Search"
                placeholderTextColor="#BDBDBD"
                value={nameForFins}
                onChangeText={text => {
                  setName(text);
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
      {contactsList.length > 0 && (
        <FlatList
          data={contactsList}
          keyExtractor={(item, ind) => ind.toString()}
          renderItem={({item}) => (
            <ContactItem contact={item} navigation={navigation} />
          )}
        />
      )}
    </Container>
  );
};
