import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import filter from '../assets/img/preview.jpeg';

const Item = () => {
  return (
    <View style={styles.item}>
      <Image style={styles.itemImg} source={filter} />
      <Text style={styles.itemText}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: '#7e7e7e',
  },
  itemImg: {
    margin: 15,
    marginLeft: 0,
    width: 100,
    height: 100,
  },
});

export default Item;
