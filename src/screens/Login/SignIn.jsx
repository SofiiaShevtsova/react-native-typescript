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
import {useDispatch} from 'react-redux';
// import {logInUser} from '../../../redux/Auth/authOperation';
// import styles from '../Style/styleAuthPages';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(true);

  const dispatch = useDispatch();

  const emailHandler = text => setEmail(text);
  const passwordHandler = text => setPassword(text);
  const showPassword = () => setShowPass(!showPass);

  const SignIn = () => {
    const user = {email, password};
    // dispatch(logInUser(user));

    setEmail('');
    setPassword('');
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <View
    //   style={{
    //     ...styles.containerLogin,
    //     marginBottom: isShowKeyboard ? -230 : 0,
    //       }}
    >
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <Text>Log in</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
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
        <Pressable onPress={SignIn}>
          <Text>Sign in</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Registration')}>
          <Text>Don't have an account? Sign up</Text>
        </Pressable>
      </TouchableWithoutFeedback>
    </View>
  );
};
