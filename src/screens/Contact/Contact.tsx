import {Container} from '../../components/commons';
import React from 'react';
import {TextInput, View, Image, Text, Pressable} from 'react-native';
// import styles from './Post/stylePosts';

export const Contact = ({route}: {route: any}) => {
  const contact = route.params.contact;

  return (
    <Container>
      <View>
        <View>
          <Image
            source={{uri: `${contact.image}`}}
            style={{width: '100%', height: 240}}
          />
        </View>
        <Text>Name</Text>
        <TextInput
          //   style={styles.input}
          value={contact.name}
        />
        <Text>Phone number</Text>
        <TextInput value={contact.phone} />
      </View>
      <Pressable
      //   onPress={ }
      >
        <Text>Call</Text>
      </Pressable>
      <Pressable
      //   onPress={ }
      >
        <Text>Delete</Text>
      </Pressable>
    </Container>
  );
};
