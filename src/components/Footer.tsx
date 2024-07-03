import {View, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from './ui/CustomButton';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <CustomButton label="Products" onPress={() => {}} />
      <CustomButton label="Checkout" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: 'rgba(125, 125, 194, 0.3)',
  },
});

export default Footer;
