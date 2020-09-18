import React from 'react';
import Header from '../components/Header';
import {ScrollView, StyleSheet, View} from 'react-native';
import ItemList from '../components/ItemList';

const Main = () => {
  return (
    <>
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <ItemList />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ccc',
  },
  body: {
    backgroundColor: '#fff',
  },
});

export default Main;
