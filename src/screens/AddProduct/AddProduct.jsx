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
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles/styles';

export const AddProduct = ({navigation}) => {
  const [givenName, setName] = useState('');
  const [number, setPhone] = useState('');

  const onAddBtnClick = () => {
    const image = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';
    const newContact = {
      givenName,
      phoneNumbers: [{label: 'mobile', number: number}],
      image,
    };

    navigation.navigate('Home', {newContact});
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
              color: givenName ? 'rgb(100, 100, 100)' : 'rgb(255, 0, 0)',
            }}>
            Name
          </Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={givenName}
            onChangeText={text => {
              setName(text.trim().toLowerCase());
            }}
          />
          <Text style={{...styles.textError, opacity: givenName ? 0 : 1}}>
            Phone is required!
          </Text>
          <Text
            style={{
              ...styles.text,
              color: number ? 'rgb(100, 100, 100)' : 'rgb(255, 0, 0)',
            }}>
            Phone Number
          </Text>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={number}
            onChangeText={text => {
              setPhone(text.trim().toLowerCase());
            }}
          />
          <Text style={{...styles.textError, opacity: number ? 0 : 1}}>
            Phone is required!
          </Text>
          <Pressable
            onPress={onAddBtnClick}
            style={{...styles.button, ...styles.add}}
            disabled={!givenName && !number ? true : false}>
            <Ionicons name="add-outline" color="#000000" size={20} />
            <Text style={styles.text}>Add Contact</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};
