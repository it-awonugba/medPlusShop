import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext';
import CartItem from '../components/CartItem';
import CartFooter from '../components/CartFooter';

const CheckoutScreen = () => {
  const {cart, removeProductFromCart} = useCart();
  return (
    <View>
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
        <View style={styles.container}>
          <Text> Your cart is empty</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default CheckoutScreen;
