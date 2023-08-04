import {Container} from '../../components/commons';
import React, {useState} from 'react';
import {TextInput, View, Image, Text, Pressable} from 'react-native';
// import styles from './Post/stylePosts';

export const Contact = ({route}) => {
  const [contact, setContact] = useState(route.params.contact);

  return (
    <Container>
      <View>
        <View>
          <Image
          // source={{uri: `${image}`}}
          // style={{width: '100%', height: 240}}
          />
        </View>
        <Text>Name</Text>
        <TextInput />
        <Text>Phone number</Text>
        <TextInput />
      </View>
      <Pressable onPress={}>
        <Text>Call</Text>
      </Pressable>
      <Pressable onPress={}>
        <Text>Delete</Text>
      </Pressable>
    </Container>
  );
};
