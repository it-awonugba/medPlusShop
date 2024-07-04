import {View, Text, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext';
import {useFormatCurrency} from '../hooks/useFormatCurrency';

export default function CartFooter() {
  const {cart} = useCart();
  const {formatCurrency} = useFormatCurrency();

  return (
    <View style={styles.constainer}>
      <Text style={styles.subTotal}>
        {formatCurrency(
          cart.reduce((total, item) => total + item.price * item.quantity!, 0),
        )}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 24,
  },
  subTotal: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
