import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useFormatCurrency} from '../hooks/useFormatCurrency';
import {Product} from '../data/Products';
import CustomButton from './ui/CustomButton';

type Prop = {
  product: Product;
};

const ProductItem = ({product}: Prop) => {
  const {formatCurrency} = useFormatCurrency();
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text>{formatCurrency(product.price)}</Text>
      <CustomButton
        label="Add to Cart"
        onPress={() => {
          return;
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
    paddingTop: 4,
    alignItems: 'center',
    gap: 4,
  },
  productImage: {
    width: 180,
    height: 180,
    aspectRatio: 1,
  },
  productTitle: {
    fontWeight: '600',
  },
});

export default ProductItem;
