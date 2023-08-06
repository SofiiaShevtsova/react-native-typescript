import React, {Children, useEffect, useState} from 'react';
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
} from 'react-native';
import Contacts from 'react-native-contacts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ContactItem} from './ContactItem';
import {filter} from '../../services/filterFunction';
import {styles} from '../../styles/styles';

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
      const findContact = contactsList.find(
        contact => contact.givenName === cont,
      );
      if (findContact) {
        Contacts.deleteContact(findContact.recordID);
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
        Contacts.addContact(cont);
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
                style={styles.inputHome}
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
            keyExtractor={(item, ind) => item.recordID}
            renderItem={({item}) => (
              <ContactItem contact={item} navigation={navigation} />
            )}
          />
        )}
      </View>
      <Pressable
        style={styles.buttonAdd}
        onPress={() => navigation.navigate('Add Contact')}>
        <AntDesign name="pluscircle" color="rgb(0, 150, 255)" size={70} />
      </Pressable>
    </>
  );
};
