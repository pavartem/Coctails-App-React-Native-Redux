import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text} from 'react-native';
import Item from './Item';
import {useSelector} from 'react-redux';

const ItemList = ({query}) => {
  const drinks = useSelector(({drinks}) => drinks[query]);
  return (
    <ScrollView style={styles.itemList}>
      <Text style={styles.listingTitle}>{query}</Text>
      {drinks?.map((el) => (
        <Item drink={el} key={el.idDrink} />
      ))}
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
