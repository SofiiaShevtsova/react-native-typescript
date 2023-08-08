import React, {useEffect} from 'react';
import {View, Image, Text, Linking, Alert, Platform} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles/styles';
import {RouteProp} from '@react-navigation/native';
import {OneProduct, User} from '../../commons/type';
import {useAppDispatch} from '../../redux/store';
import {useSelector} from 'react-redux';
import {getCurrentProduct, getUser} from '../../redux/selectorAll';
import {
  getOneProduct,
  removeProduct,
} from '../../redux/product/productsOperations';
import {Button} from '../../components/Button';
import {constants} from '../../commons/constants';
import {formatText} from '../../helpers/formatText';

export type ProductProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any>;
};

export const Product: React.FC<ProductProps> = ({route, navigation}) => {
  const productId: string = route.params?.product;
  const currentProduct: OneProduct | null = useSelector(getCurrentProduct);
  const user: User | null = useSelector(getUser);

  const dispatcher = useAppDispatch();

  const callNumber = () => {
    let phoneNumber = currentProduct?.seller.phoneNumber;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${currentProduct?.seller.phoneNumber}`;
    } else {
      phoneNumber = `tel:${currentProduct?.seller.phoneNumber}`;
    }
    Linking.canOpenURL(phoneNumber).then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        if (phoneNumber) {
          return Linking.openURL(phoneNumber);
        }
      }
    });
  };

  const onDeleteProductClick = () => {
    currentProduct?.id && dispatcher(removeProduct(currentProduct?.id));
    navigation.navigate(constants.ROUTES.HOME);
  };

  useEffect(() => {
    dispatcher(getOneProduct(productId));
  }, [dispatcher, productId]);

  return (
    <View style={{...styles.container, alignItems: 'center'}}>
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: currentProduct?.images[0],
          }}
          alt="product"
        />
      </View>
      <View>
        <Text style={styles.productTitle}>
          {currentProduct?.title && formatText(currentProduct?.title, 25)}
        </Text>
        <Text style={styles.price}>{currentProduct?.price + '$'}</Text>
        <Text style={styles.description}>{currentProduct?.description}</Text>
      </View>
      <View style={styles.sellerBox}>
        <Image
          source={{
            uri: currentProduct?.seller.avatar,
          }}
          style={styles.imageSeller}
          alt="user"
        />
        <View>
          <Text style={styles.nameSeller}>
            {currentProduct?.seller.fullName}
          </Text>
          <Text style={styles.phoneSeller}>
            {currentProduct?.seller.phoneNumber}
          </Text>
        </View>
        <Button name={'Call Seller'} onPress={callNumber} color={'green'} />
      </View>
      {user?.id === currentProduct?.seller.id && (
        <Button
          name={'Delete Product'}
          onPress={onDeleteProductClick}
          color={'red'}
        />
      )}
    </View>
  );
};