import React from 'react';
import {View, Pressable, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {logOut} from '../../redux/auth/authOperations';
import {useAppDispatch} from '../../redux/store';
import {Input, InputProps} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {useSelector} from 'react-redux';
import {getUser} from '../../redux/selectorAll';

export const Profile: Element = () => {
  const user = useSelector(getUser);
  const dispatcher = useAppDispatch();

  const onLogOut = () => {
    dispatcher(logOut());
  };

  const inputNameInfo: InputProps = {
    name: 'Name',
    defaultValue: user?.fullName || '',
  };

  const inputEmailInfo: InputProps = {
    name: 'Email',
    defaultValue: user?.email || '',
  };

  const inputPhoneInfo: InputProps = {
    name: 'Phone number',
    defaultValue: user?.phoneNumber || '',
  };

  return (
    <View>
      <View>
        <Image
          source={{
            uri: user?.avatar,
          }}
          alt="user"
        />
        <Pressable onPress={() => {}}>
          <AntDesign name="pluscircle" color="rgb(0, 150, 255)" size={70} />
        </Pressable>
      </View>
      <Input {...inputNameInfo} />
      <Input {...inputEmailInfo} />
      <Input {...inputPhoneInfo} />
      <Button name={'Sign out'} onPress={onLogOut} color={'blue'} />
    </View>
  );
};
