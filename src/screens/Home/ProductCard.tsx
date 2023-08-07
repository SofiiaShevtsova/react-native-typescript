import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from '../../styles/styles';
import {Product} from '../../commons/type';
import {constants} from '../../commons/constants';

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
          navigation.navigate(constants.ROUTES.PRODUCT, {product})
        }>
        <View style={styles.cardContainer}>
          <Image
            source={{
              uri: product.preview,
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </Pressable>
    </View>
  );
};
