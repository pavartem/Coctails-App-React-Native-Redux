import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Item from './Item';

const ItemList = () => {
  return (
    <ScrollView style={styles.itemList}>
      <Text style={styles.listingTitle}>Ordinary Drink</Text>
      <Item />
      <Item />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemList: {
    padding: 20,
  },
  listingTitle: {
    color: '#7e7e7e',
    fontSize: 14,
  },
});

export default ItemList;
