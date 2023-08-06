import React from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  Pressable,
  Linking,
  Alert,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles/styles';

export const Product = ({route, navigation}) => {
  const contact = route.params.contact;
  const phone = contact.phoneNumbers[0].number;

  const callNumber = () => {
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber).then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    });
  };

  const removeContact = () => {
    navigation.navigate('Home', {removeContact: contact.givenName});
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
          }}
          style={styles.imageContact}
          alt="user"
        />
      </View>
      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.input} value={contact.givenName} />
      <Text style={styles.text}>Phone number</Text>
      <TextInput value={phone} style={styles.input} />
      <View style={styles.btnBox}>
        <Pressable
          style={{...styles.button, ...styles.call}}
          onPress={callNumber}>
          <Ionicons name="call" color="#ffffff" size={20} />
          <Text style={styles.buttonText}>Call</Text>
        </Pressable>
        <Pressable
          style={{...styles.button, ...styles.delete}}
          onPress={removeContact}>
          <Ionicons name="close" color="#ffffff" size={20} />
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};
