import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {styles} from '../../styles/styles';

export const ContactItem = ({contact, navigation}) => {
  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => navigation.navigate('Contact Details', {contact})}>
        <View style={styles.cardContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{contact.givenName}</Text>
        </View>
      </Pressable>
    </View>
  );
};
