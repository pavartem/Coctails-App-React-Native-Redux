import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Filters from './src/screens/Filters';

const App = () => {
  return (
    <View style={styles.app}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Filters />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default App;
