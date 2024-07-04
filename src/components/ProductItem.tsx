import {View, Image, Text, StyleSheet} from 'react-native';
import {useFormatCurrency} from '../hooks/useFormatCurrency';
import {Product} from '../data/Products';
import CustomButton from './ui/CustomButton';
import {useCart} from '../context/CartContext';

type Prop = {
  product: Product;
};

const ProductItem = ({product}: Prop) => {
  const {formatCurrency} = useFormatCurrency();
  const {addProductToCart} = useCart();
  return (
    <View style={styles.container}>
      <Image
        source={product.image}
        style={styles.productImage}
        resizeMode="cover"
      />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.price}>{formatCurrency(product.price)}</Text>
      <CustomButton
        label="Add to Cart"
        type="transparent"
        onPress={() => {
          addProductToCart(product);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    paddingBottom: 10,
    marginBottom: 8,
    alignItems: 'center',
    gap: 6,
  },
  productImage: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
  productTitle: {
    fontWeight: '600',
    color: 'rgb(0,0,0)',
  },
  price: {
    color: 'rgb(0,0,0)',
  },
});

export default ProductItem;
