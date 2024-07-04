import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {Product} from '../data/Products';
import {useFormatCurrency} from '../hooks/useFormatCurrency';

interface CartItemProps {
  item: Product;
  removeProductFromCart: (id: number) => void;
  addProductToCart: (product: Product, quantity?: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  addProductToCart,
  removeProductFromCart,
}) => {
  const [quantity, setQuantity] = useState<number>(item.quantity!);
  const {formatCurrency} = useFormatCurrency();

  const decrement = () => {
    addProductToCart(item, -1);
    setQuantity(quantity - 1);
  };

  const increment = () => {
    addProductToCart(item);
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={item.image} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.productInformation}>
        <Text>{item.title}</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={decrement}>
            <Image
              source={require('../assets/minus.png')}
              style={styles.control}
            />
          </TouchableOpacity>
          <TextInput value={quantity.toString()} style={styles.quantityBox} />
          <TouchableOpacity onPress={increment}>
            <Image
              source={require('../assets/plus.png')}
              style={styles.control}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.priceBox}>
        <Text>{formatCurrency(item.price * quantity)}</Text>
      </View>
      <TouchableOpacity onPress={() => removeProductFromCart(item.id)}>
        <Image source={require('../assets/close.png')} style={styles.control} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 2,
    gap: 25,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageBox: {
    maxWidth: 80,
    width: 80,
    height: 80,
    overflow: 'hidden',
  },
  productInformation: {
    gap: 2,
    maxWidth: 120,
    width: 120,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityBox: {
    textAlign: 'center',
  },
  control: {
    width: 12,
    height: 12,
  },
  priceBox: {
    width: 80,
  },
});
export default CartItem;
