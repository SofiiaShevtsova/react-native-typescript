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
  const formatText = (text: string): string => {
    if (text.length > 100) {
      return text.slice(0, 99) + '...';
    }
    return text;
  };

  const formatTitle = (title: string): string => {
    if (title.length > 15) {
      return title.slice(0, 15) + '...';
    }
    return title;
  };

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
              {formatTitle(product.title)}
            </Text>
            <Text style={styles.description}>
              {formatText(product.description)}
            </Text>
          </View>
          <Text style={styles.price}>{product.price + '$'}</Text>
        </View>
      </Pressable>
    </View>
  );
};
