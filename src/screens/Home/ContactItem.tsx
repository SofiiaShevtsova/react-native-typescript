import {Text, View, Pressable, Image} from 'react-native';

export const ContactItem = ({contact, navigation}) => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate('Contact Details', {contact})}>
        <View>
          <Image
          // source={{uri: `${image}`}}
          // style={{width: '100%', height: 240}}
          />
        </View>
        <Text>{contact}</Text>
      </Pressable>
    </View>
  );
};
