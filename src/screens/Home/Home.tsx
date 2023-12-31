import React, {SetStateAction, Dispatch, useEffect, useState} from 'react';
import {
  TextInput,
  View,
  FlatList,
  Platform,
  Pressable,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../redux/store';
import {ProductCard} from './ProductCard';
import {filter} from '../../services/filterFunction';
import {styles} from '../../styles/styles';
import {getAllProducts as getProductsList} from '../../redux/selectorAll';
import {getAllProducts as getAll} from '../../redux/product/productsOperations';
import {NavigationProps, Product} from '../../commons/type';
import {constants} from '../../commons/constants';

export const Home: React.FC<NavigationProps> = ({navigation}) => {
  const productsList: Product[] = useSelector(getProductsList);
  const [listForShow, setList]: [Product[] | never[], any] = useState([]);
  const [filterQuery, setFilter]: [string, Dispatch<SetStateAction<string>>] =
    useState('');

  const dispatcher = useAppDispatch();

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const changeFilter = (text: string): void => {
    setFilter(text.trim().toLowerCase());
  };

  useEffect(() => {
    dispatcher(getAll());
  }, [dispatcher]);

  useEffect(() => {
    if (filterQuery) {
      const newList: Product[] | never[] = filter(filterQuery, productsList);
      setList(newList);
    } else {
      setList(productsList);
    }
  }, [filterQuery, productsList]);

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
                onChangeText={changeFilter}
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
            keyExtractor={(item: Product) => item.id}
            renderItem={({item}: {item: Product}) => (
              <ProductCard product={item} navigation={navigation} />
            )}
          />
        )}
      </View>
      <Pressable
        style={styles.buttonAdd}
        onPress={() => navigation.navigate(constants.ROUTES.ADD_PRODUCT)}>
        <AntDesign name="pluscircle" color="green" size={70} />
      </Pressable>
    </>
  );
};
