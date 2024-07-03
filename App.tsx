import {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Shop from './src/screens/Shop';
import Header from './src/components/Header';
import Footer, {Screen} from './src/components/Footer';
import CheckoutScreen from './src/screens/CheckoutScreen';
import {CartProvider} from './src/context/CartContext';

function App(): React.JSX.Element {
  const [activeScreen, setActiveScreen] = useState<Screen>('products');

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar />
      <CartProvider>
        <Header />
        {activeScreen === 'products' ? <Shop /> : <CheckoutScreen />}
        <Footer setActiveScreen={setActiveScreen} />
      </CartProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'rgba(253, 253, 253, 0.5)',
    flex: 1,
  },
});

export default App;
