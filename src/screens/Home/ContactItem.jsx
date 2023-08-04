import {Text, View, Pressable, Image, StyleSheet} from 'react-native';

export const ContactItem = ({contact, navigation}) => {
  return (
    <View style={styles.item}>
      <Pressable
        onPress={() => navigation.navigate('Contact Details', {contact})}>
        <View style={styles.container}>
          <Image
            source={{
              uri: `https://cdn-icons-png.flaticon.com/512/1077/1077114.png`,
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{contact.name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 20,
    color: 'rgb(100, 100, 100)',
    fontSize: 15,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
