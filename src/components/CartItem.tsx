import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Product} from '../data/Products';
import CustomButton from './ui/CustomButton';

interface CartItemProps {
  item: Product;
  removeProductFromCart: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({item, removeProductFromCart}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={item.image} resizeMode="cover" style={styles.image} />
      </View>
      <Text>{item.title}</Text>
      <Text>{item.quantity}</Text>
      <CustomButton
        label="Remove"
        onPress={() => removeProductFromCart(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginVertical: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageBox: {
    width: 80,
    height: 80,
    overflow: 'hidden',
  },
});
export default CartItem;
