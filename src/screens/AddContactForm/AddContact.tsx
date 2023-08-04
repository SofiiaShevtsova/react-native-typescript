import React, {useState, useEffect} from 'react';
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
import {Container} from '../../components/commons';

const CreatePosts = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contact, setContact] = useState(null);

  const onAddBtnClick = () => {
    const contact = {
      name,
      phone,
    };

    setContact(contact);
    navigation.navigate('Home');

    setName('');
    setPhone('');
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <View>
            <Text>Name</Text>
            <TextInput
              placeholder="Name"
              placeholderTextColor="#BDBDBD"
              //   style={styles.input}
              value={name}
              onChangeText={text => {
                setName(text);
              }}
            />
            <Text>Phone Number</Text>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#BDBDBD"
              value={phone}
              onChangeText={text => {
                setPhone(text);
              }}
            />
            <Pressable
              onPress={onAddBtnClick}
              //   disabled={!image ? true : false}
            >
              <Text>Add Contact</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default CreatePosts;
