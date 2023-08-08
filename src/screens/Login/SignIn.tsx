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
import {constants} from '../../commons/constants';
import {styles} from '../../styles/styles';

export const Login: React.FC<NavigationProps> = ({navigation}) => {
  const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] =
    useState('');
  const [password, setPassword]: [string, Dispatch<SetStateAction<string>>] =
    useState('');
  const [isShow, setIsShowed]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);

  const dispatcher = useAppDispatch();

  const emailHandler = (text: string) => {
    const setText = text.trim();
    setEmail(setText);
  };
  const passwordHandler = (text: string) => {
    const setText = text.trim();
    setPassword(setText);
  };

  const onSignIn = () => {
    if (!email || !email.endsWith('@gmail.com') || password.length < 4) {
      setIsShowed(true);
    } else {
      const user = {email, password};
      dispatcher(logIn(user));

      setEmail('');
      setPassword('');
    }
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
  };

  return (
    <View
      style={{...styles.container, paddingVertical: 50, alignItems: 'center'}}>
      <Text style={styles.title}>Sign in</Text>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input {...inputEmailInfo} />
          <ErrorText
            text={'Email is required! End with @gmail.com'}
            isShowed={isShow}
          />
          <View>
            <Input {...inputPasswordInfo} />
            <ErrorText text={'Entered password!'} isShowed={isShow} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Button name={'Sign in'} onPress={onSignIn} color={'green'} />
      <View style={styles.flexRowBox}>
        <Text>Don't have an account?</Text>
        <Pressable
          onPress={() => navigation.navigate(constants.ROUTES.REGISTRATION)}>
          <Text style={styles.linkAuth}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};
