import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext';
import CartItem from '../components/CartItem';
import CartFooter from '../components/CartFooter';

const CheckoutScreen = () => {
  const {cart, removeProductFromCart} = useCart();
  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={({item}) => (
            <CartItem
              item={item}
              removeProductFromCart={removeProductFromCart}
            />
          )}
          ListFooterComponent={<CartFooter />}
        />
      ) : (
        <View style={styles.textContainer}>
          <Text> Your cart is empty</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  textContainer: {
    alignItems: 'center',
  },
});

export default CheckoutScreen;
