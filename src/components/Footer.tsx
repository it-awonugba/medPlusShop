import {View, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from './ui/CustomButton';

export type Screen = 'products' | 'checkout';

type Props = {
  setActiveScreen: (screen: Screen) => void;
};

const Footer = ({setActiveScreen}: Props) => {
  return (
    <View style={styles.footerContainer}>
      <CustomButton
        label="Products"
        type="solid"
        onPress={() => setActiveScreen('products')}
      />
      <CustomButton
        label="Checkout"
        type="solid"
        onPress={() => setActiveScreen('checkout')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0, 0.1)',
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
});

export default Footer;
