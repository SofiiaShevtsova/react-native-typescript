import React, {useState, Dispatch, SetStateAction} from 'react';
import {
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {logIn} from '../../redux/auth/authOperations';
import {NavigationProps} from '../../commons/type';
import {useAppDispatch} from '../../redux/store';
import {Input, InputProps} from '../../components/TextInput';
import {ErrorText} from '../../components/ErrorText';
import {Button} from '../../components/Button';

export const Login: React.FC<NavigationProps> = ({navigation}) => {
  const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] =
    useState('');
  const [password, setPassword]: [string, Dispatch<SetStateAction<string>>] =
    useState('');
  const [showPass, setShowPass]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(true);

  const dispatcher = useAppDispatch();

  const emailHandler = (text: string) => {
    const setText = text.trim();
    setEmail(setText);
  };
  const passwordHandler = (text: string) => {
    const setText = text.trim();
    setPassword(setText);
  };
  const showPassword = () => setShowPass(!showPass);

  const SignIn = () => {
    const user = {email, password};
    dispatcher(logIn(user));

    setEmail('');
    setPassword('');
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const inputEmailInfo: InputProps = {
    name: 'Email',
    type: 'email-address',
    placeholder: 'Email',
    defaultValue: email,
    onChange: emailHandler,
  };

  const inputPasswordInfo: InputProps = {
    name: 'Password',
    placeholder: 'Password',
    defaultValue: password,
    onChange: passwordHandler,
    secureTextEntry: showPass,
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <Text>Log in</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input {...inputEmailInfo} />
          <ErrorText text={'Email is required!'} isShowed={!!email} />
          <View>
            <Input {...inputPasswordInfo} />
            <Pressable onPress={showPassword}>
              <Text>Show</Text>
            </Pressable>
            <ErrorText text={'Entered password!'} isShowed={!!password} />
          </View>
        </KeyboardAvoidingView>
        <Button name={'Sign in'} onPress={SignIn} color={'green'} />
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Registration')}>
          <Text>Sign up</Text>
        </Pressable>
      </TouchableWithoutFeedback>
    </View>
  );
};
