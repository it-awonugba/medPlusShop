import {View, FlatList, StyleSheet} from 'react-native';
import ProductItem from '../components/ProductItem';
import {Products} from '../data/Products';

const Shop = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Products}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 12,
    marginBottom: 50,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  columnStyle: {
    gap: 10,
  },
});

export default Shop;
