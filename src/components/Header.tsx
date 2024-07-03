import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <View>
        <Text style={styles.appIconText}>Med+</Text>
      </View>
      <View style={styles.cart}>
        <Text style={styles.cart}>
          Cart (<Text style={styles.cartCount}>{0}</Text>)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  appIconText: {
    fontSize: 20,
    fontWeight: '800',
  },
  cart: {
    padding: 4,
    fontWeight: '800',
  },
  cartCount: {
    fontWeight: '400',
  },
});

export default Header;
