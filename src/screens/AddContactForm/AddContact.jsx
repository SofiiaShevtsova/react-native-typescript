import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const AddContact = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contact, setContact] = useState(null);

  const onAddBtnClick = () => {
    const image = '';
    const newContact = {
      name,
      phone,
      image,
    };

    setContact(newContact);
    navigation.navigate('Home');

    setName('');
    setPhone('');
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text
            style={{
              ...styles.text,
              color: name ? 'rgb(100, 100, 100)' : 'rgb(255, 0, 0)',
            }}>
            Name
          </Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={name}
            onChangeText={text => {
              setName(text.trim().toLowerCase());
            }}
          />
          <Text style={{...styles.textError, opacity: name ? 0 : 1}}>
            Phone is required!
          </Text>
          <Text
            style={{
              ...styles.text,
              color: phone ? 'rgb(100, 100, 100)' : 'rgb(255, 0, 0)',
            }}>
            Phone Number
          </Text>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={phone}
            onChangeText={text => {
              setPhone(text.trim().toLowerCase());
            }}
          />
          <Text style={{...styles.textError, opacity: phone ? 0 : 1}}>
            Phone is required!
          </Text>
          <Pressable
            onPress={onAddBtnClick}
            style={styles.button}
            disabled={!name && !phone ? true : false}>
            <Ionicons name="add-outline" color="#000000" size={20} />
            <Text style={styles.text}>Add Contact</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(250, 250, 250)',
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
  },
  textError: {
    fontSize: 10,
    color: 'rgb(255, 0, 0)',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    paddingVertical: 5,
    borderBottomColor: 'rgb(150, 150, 150)',
    borderBottomWidth: 1,
    fontSize: 18,
  },
  button: {
    width: 150,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(50, 150, 255)',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
});
