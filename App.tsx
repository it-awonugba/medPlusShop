import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Shop from './src/screens/Shop';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar />
      <Header />
      <Shop />
      <Footer />
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
