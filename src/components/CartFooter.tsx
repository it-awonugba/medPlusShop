import {View, Text, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext';
import {useFormatCurrency} from '../hooks/useFormatCurrency';

export default function CartFooter() {
  const {cart} = useCart();
  const {formatCurrency} = useFormatCurrency();

  return (
    <View style={styles.constainer}>
      <View style={styles.totalContainer}>
        <Text style={styles.subTotal}>Total:</Text>
        <Text style={styles.totalPrice}>
          {formatCurrency(
            cart.reduce(
              (total, item) => total + item.price * item.quantity!,
              0,
            ),
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 24,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderBottomWidth: 1,
  },
  subTotal: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgb(0,0,0)',
  },
  totalPrice: {
    color: 'rgb(0,0,0)',
  },
});
