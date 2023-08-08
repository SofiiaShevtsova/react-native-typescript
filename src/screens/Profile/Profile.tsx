import React from 'react';
import {View, Pressable, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {logOut} from '../../redux/auth/authOperations';
import {useAppDispatch} from '../../redux/store';
import {Input, InputProps} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {useSelector} from 'react-redux';
import {getUser} from '../../redux/selectorAll';
import {styles} from '../../styles/styles';

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
    <View style={{...styles.container, alignItems: 'center', gap: 20}}>
      <View style={styles.imageBoxProfile}>
        <Image
          source={{
            uri: user?.avatar,
          }}
          style={styles.profileImage}
          alt="user"
        />
        <Pressable style={styles.btnEdit} onPress={() => {}}>
          <Entypo name="edit" color="#ffffff" size={30} />
        </Pressable>
      </View>
      <View>
        <Input {...inputNameInfo} />
        <Input {...inputEmailInfo} />
        <Input {...inputPhoneInfo} />
      </View>
      <Button name={'Sign out'} onPress={onLogOut} color={'rgb(0, 150, 255)'} />
    </View>
  );
};
