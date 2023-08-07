import React, {SetStateAction, Dispatch, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppDispatch} from '../../redux/store';
import {styles} from '../../styles/styles';
import {Input, InputProps} from '../../components/TextInput';
import {ErrorText} from '../../components/ErrorText';
import {Button, ButtonProps} from '../../components/Button';
import {addProduct} from '../../redux/product/productsOperations';
import {AddProductType} from '../../commons/type';

type AddProductProps = {
  navigation: NativeStackNavigationProp<any>;
};

export const AddProduct: React.FC<AddProductProps> = ({navigation}) => {
  const [title, setTitle]: [string, Dispatch<SetStateAction<string>>] =
    useState('');
  const [price, setPrice]: [string, Dispatch<SetStateAction<string>>] =
    useState('');
  const [description, setDescription]: [
    string,
    Dispatch<SetStateAction<string>>,
  ] = useState('');
  const dispatcher = useAppDispatch();

  const changeTitle = (text: string) => {
    const setText: string = text.trim().toLowerCase();
    setTitle(setText);
  };

  const changePrice = (text: string) => {
    const setText: string = text.trim().toLowerCase();
    setPrice(setText);
  };

  const changeDescription = (text: string) => {
    const setText: string = text.trim().toLowerCase();
    setDescription(setText);
  };

  const onAddBtnClick = () => {
    const image = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';
    const newProduct: AddProductType = {
      title,
      description,
      preview: image,
    };
    dispatcher(addProduct(newProduct));
    navigation.navigate('Home');
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const inputTitleInfo: InputProps = {
    name: 'Title',
    placeholder: 'Title',
    defaultValue: title,
    onChange: changeTitle,
  };

  const inputPriceInfo: InputProps = {
    name: 'Price',
    type: 'numeric',
    placeholder: 'Price',
    defaultValue: price,
    onChange: changePrice,
  };

  const btnAddProduct: ButtonProps = {
    name: 'Add Product',
    onPress: onAddBtnClick,
    color: '',
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input {...inputTitleInfo} />
          <Input {...inputPriceInfo} />
          <ErrorText text={'Title is required!'} isShowed={!!title} />
          <Text
            style={{
              ...styles.text,
              color: description ? 'rgb(100, 100, 100)' : 'rgb(255, 0, 0)',
            }}>
            Description
          </Text>
          <TextInput
            placeholder="Type here"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={description}
            onChangeText={changeDescription}
          />
          <Text style={{...styles.textError, opacity: description ? 0 : 1}}>
            Description is required!
          </Text>
          <Button {...btnAddProduct}>
            <Ionicons name="add-outline" color="#000000" size={20} />
          </Button>
          <Button {...btnAddProduct} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};
