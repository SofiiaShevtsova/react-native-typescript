import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  FlatList,
  Platform,
  Pressable,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import * as Contacts from 'react-native-contacts';
import {ContactItem} from './ContactItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {filter} from '../../services/filterFunction';

export const Home = ({navigation}) => {
  const [contactsList, setContactsList] = useState([]);
  const [listForShow, setList] = useState([]);
  const [filterQuery, setFilter] = useState('');

  const keyboardHide = () => {
    Keyboard.dismiss();
  };
  contactsList.length === 0 &&
    setContactsList([
      {name: 'Sofiia', phone: '507755251', image: ''},
      {name: 'Nan', phone: '507885251', image: ''},
    ]);

  // useEffect(() => {
  //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  //     title: "Contacts",
  //     message: "This app would like to view your contacts.",
  //     buttonPositive: "Accept",
  //   })
  //     .then((res) => {
  //       console.log("Permission: ", res);
  //       console.log(Contacts);
  //       Contacts?.getAll()
  //         .then((contacts) => {
  //           // work with contacts
  //           setContactsList(contacts);
  //           console.log(contacts);
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error("Permission error: ", error);
  //     });
  // }, []);

  useEffect(() => {
    if (filterQuery) {
      const newList = filter(filterQuery, contactsList);
      setList(newList);
    } else {
      setList(contactsList);
    }
  }, [contactsList, filterQuery]);

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Search"
                placeholderTextColor="#aaaaaa"
                style={styles.input}
                value={filterQuery}
                onChangeText={text => {
                  setFilter(text.trim().toLowerCase());
                }}
              />
              <AntDesign
                name="search1"
                color="#aaaaaa"
                size={20}
                style={styles.search}
              />
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        {listForShow.length > 0 && (
          <FlatList
            data={listForShow}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <ContactItem contact={item} navigation={navigation} />
            )}
          />
        )}
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Add Contact')}>
        <AntDesign name="pluscircle" color="rgb(0, 150, 255)" size={70} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 250, 250)',
  },
  input: {
    margin: 20,
    paddingLeft: 35,
    paddingRight: 5,
    paddingVertical: 5,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(150, 150, 150)',
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
  inputBox: {
    position: 'relative',
  },
  search: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
});
