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
import {signUp} from '../../redux/auth/authOperations';
import {NavigationProps} from '../../commons/type';
import {useAppDispatch} from '../../redux/store';
import {Input, InputProps} from '../../components/TextInput';
import {ErrorText} from '../../components/ErrorText';
import {Button} from '../../components/Button';
import {constants} from '../../commons/constants';

export const Registration: React.FC<NavigationProps> = ({navigation}) => {
  const [name, setName]: [string, Dispatch<SetStateAction<string>>] =
    useState('');
  const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] =
    useState('');
  const [phone, setPhone]: [string, Dispatch<SetStateAction<string>>] =
    useState('');
  const [password, setPassword]: [string, Dispatch<SetStateAction<string>>] =
    useState('');
  const [showPass, setShowPass]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(true);

  const dispatcher = useAppDispatch();

  const nameHandler = (text: string) => {
    const setText = text.trim();
    setName(setText);
  };
  const emailHandler = (text: string) => {
    const setText = text.trim();
    setEmail(setText);
  };
  const phoneHandler = (text: string) => {
    const setText = text.trim();
    setPhone(setText);
  };
  const passwordHandler = (text: string) => {
    const setText = text.trim();
    setPassword(setText);
  };
  const showPassword = () => setShowPass(!showPass);

  const onSingUp = () => {
    const user = {email, password, fullName: name, phoneNumber: phone};
    dispatcher(signUp(user));

    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const inputNameInfo: InputProps = {
    name: 'Name',
    placeholder: 'Name',
    defaultValue: name,
    onChange: nameHandler,
  };

  const inputEmailInfo: InputProps = {
    name: 'Email',
    type: 'email-address',
    placeholder: 'Email',
    defaultValue: email,
    onChange: emailHandler,
  };

  const inputPhoneInfo: InputProps = {
    name: 'Phone number',
    type: 'numeric',
    placeholder: '5555555555',
    defaultValue: phone,
    onChange: phoneHandler,
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
          <Input {...inputNameInfo} />
          <ErrorText text={'Name is required!'} isShowed={!!name} />
          <Input {...inputEmailInfo} />
          <ErrorText text={'Email is required!'} isShowed={!!email} />
          <Input {...inputPhoneInfo} />
          <ErrorText text={'Phone number is required!'} isShowed={!!phone} />
          <View>
            <Input {...inputPasswordInfo} />
            <Pressable onPress={showPassword}>
              <Text>Show</Text>
            </Pressable>
            <ErrorText text={'Password is required!'} isShowed={!!password} />
          </View>
        </KeyboardAvoidingView>
        <Button name={'Sign up'} onPress={onSingUp} color={'green'} />
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate(constants.ROUTES.LOGIN)}>
          <Text>Sign in</Text>
        </Pressable>
      </TouchableWithoutFeedback>
    </View>
  );
};
