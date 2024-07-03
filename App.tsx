import {useState, createContext} from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Shop from './src/screens/Shop';
import Header from './src/components/Header';
import Footer, {Screen} from './src/components/Footer';
import CheckoutScreen from './src/screens/CheckoutScreen';

function App(): React.JSX.Element {
  const [cart, setCart] = useState([]);
  const [activeScreen, setActiveScreen] = useState<Screen>('products');
  const AppContext = createContext({cart, setCart});
  const value = {
    cart,
    setCart,
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar />
      <AppContext.Provider value={value}>
        <Header />
        {activeScreen === 'products' ? <Shop /> : <CheckoutScreen />}
        <Footer setActiveScreen={setActiveScreen} />
      </AppContext.Provider>
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
