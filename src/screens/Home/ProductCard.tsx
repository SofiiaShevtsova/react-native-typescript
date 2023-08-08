import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from '../../styles/styles';
import {Product} from '../../commons/type';
import {constants} from '../../commons/constants';
import {formatText} from '../../helpers/formatText';

type ProductCardProps = {
  product: Product;
  navigation: NativeStackNavigationProp<any>;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  navigation,
}) => {
  return (
    <View style={styles.card}>
      <Pressable
        onPress={() =>
          navigation.navigate(constants.ROUTES.PRODUCT, {product: product.id})
        }>
        <View style={styles.cardContainer}>
          <Image
            source={{
              uri: product.preview,
            }}
            style={styles.image}
          />
          <View>
            <Text style={styles.productTitle}>
              {formatText(product.title, 15)}
            </Text>
            <Text style={styles.description}>
              {formatText(product.description, 100)}
            </Text>
          </View>
          <Text style={styles.price}>{product.price + '$'}</Text>
        </View>
      </Pressable>
    </View>
  );
};
