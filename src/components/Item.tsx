import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {drinksType} from '../store/store';

const Item = ({drink}: {drink: drinksType}) => {
  return (
    <View style={styles.item}>
      <FastImage style={styles.itemImg} source={{uri: drink.strDrinkThumb}} />
      <Text style={styles.itemText}>{drink.strDrink}</Text>
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
