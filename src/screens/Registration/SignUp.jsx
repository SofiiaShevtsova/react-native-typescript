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
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';

export const Registration = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [image, setImage] = useState('');
  const [showPass, setShowPass] = useState(true);
  //   const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const dispatch = useDispatch();

  const nameHandler = text => setName(text);
  const emailHandler = text => setEmail(text);
  const passwordHandler = text => setPassword(text);
  const showPassword = () => setShowPass(!showPass);

  const onSignUp = () => {
    const user = {email, password, name};
    // dispatch(registerNewUser(user));
    // setImage('');
    setName('');
    setEmail('');
    setPassword('');
  };

  //   const onAddAvatar = async () => {
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       aspect: [3, 3],
  //       quality: 1,
  //     });

  //     if (result.canceled) {
  //       return;
  //     }

  //     addImages(result.assets[0].uri, 'avatar/', setImage);
  //   };

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        {/* {!image ? (
          <Pressable onPress={onAddAvatar}>
            <View style={styles.containerForAvatar}>
              <Image
                source={require('../../../images/add-min.png')}
                style={{...styles.imageAdd, width: 25, height: 25}}
              />
            </View>
          </Pressable>
        ) : (
          <Image
            source={{uri: `${image}`}}
            style={{...styles.containerForAvatar, width: 120, height: 120}}
          />
        )} */}
        <Text>Registration</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#BDBDBD"
            value={name}
            onChangeText={nameHandler}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#BDBDBD"
            value={email}
            onChangeText={emailHandler}
          />
          <View>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#BDBDBD"
              value={password}
              secureTextEntry={showPass}
              onChangeText={passwordHandler}
            />
            <Pressable onPress={showPassword}>
              <Text>Show</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
        <Pressable onPress={onSignUp}>
          <Text>Sign up</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text>If you are registered. Log in!</Text>
        </Pressable>
      </TouchableWithoutFeedback>
    </View>
  );
};
