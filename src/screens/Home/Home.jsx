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
import Contacts from 'react-native-contacts';
import {ContactItem} from './ContactItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {filter} from '../../services/filterFunction';

export const Home = ({navigation, route}) => {
  const contactForRemove = route.params?.removeContact;
  const newContact = route.params?.newContact;
  const [contactsList, setContactsList] = useState([]);
  const [listForShow, setList] = useState([]);
  const [filterQuery, setFilter] = useState('');

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const removeContact = cont => {
    if (cont) {
      const index = contactsList.findIndex(
        contact => contact.givenName === cont,
      );
      if (index !== -1) {
        const newList = contactsList.filter(
          contact => contact.givenName !== contactForRemove,
        );
        setContactsList(newList);
      }
    }
  };

  removeContact(contactForRemove);

  const addContact = cont => {
    if (cont) {
      const index = contactsList.findIndex(
        contact => contact.givenName === cont.givenName,
      );
      if (index === -1) {
        const newList = [...contactsList, cont];
        setContactsList(newList);
      }
    }
  };

  addContact(newContact);

  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Accept',
    })
      .then(res => {
        Contacts?.getAll()
          .then(contacts => {
            setContactsList(contacts);
          })
          .catch(e => {});
      })
      .catch(error => {});
  }, []);

  useEffect(() => {
    if (filterQuery) {
      const newList = filter(filterQuery, contactsList);
      setList(newList);
    } else {
      setList(contactsList);
    }
  }, [filterQuery, contactsList, contactForRemove]);

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
            keyExtractor={(item, ind) => item.givenName + ind}
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
