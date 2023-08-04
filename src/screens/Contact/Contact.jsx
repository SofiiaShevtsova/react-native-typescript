import React from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  Linking,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Contact = ({route}) => {
  const contact = route.params.contact;

  const callNumber = () => {
    let phoneNumber = contact.phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${contact.phone}`;
    } else {
      phoneNumber = `tel:${contact.phone}`;
    }
    Linking.canOpenURL(phoneNumber).then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: `https://cdn-icons-png.flaticon.com/512/1077/1077114.png`,
          }}
          style={styles.image}
          alt="user"
        />
      </View>
      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.input} value={contact.name} />
      <Text style={styles.text}>Phone number</Text>
      <TextInput value={contact.phone} style={styles.input} />
      <View style={styles.btnBox}>
        <Pressable
          style={{...styles.button, ...styles.call}}
          onPress={callNumber}>
          <Ionicons name="call" color="#ffffff" size={20} />
          <Text style={styles.buttonText}>Call</Text>
        </Pressable>
        <Pressable
          style={{...styles.button, ...styles.delete}}
          //   onPress={ }
        >
          <Ionicons name="close" color="#ffffff" size={20} />
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(250, 250, 250)',
  },
  input: {
    width: '100%',
    marginBottom: 20,
    paddingVertical: 5,
    borderBottomColor: 'rgb(150, 150, 150)',
    borderBottomWidth: 1,
    fontSize: 18,
  },
  text: {
    color: 'rgb(100, 100, 100)',
    fontSize: 15,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 30,
    borderRadius: 150,
  },
  imageBox: {
    display: 'flex',
    alignItems: 'center',
  },
  btnBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  button: {
    minWidth: 100,
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  buttonText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
  },
  delete: {
    backgroundColor: 'rgb(255, 50, 50)',
  },
  call: {
    backgroundColor: 'rgb(50, 150, 255)',
  },
});
