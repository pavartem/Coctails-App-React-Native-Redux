import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import mark from '../assets/img/mark.png';

type FilterItemProps = {
  marked: boolean;
};

const FilterItem = ({marked}: FilterItemProps) => {
  return (
    <View style={styles.item}>
      <Text>Ordinary Drink</Text>
      {marked && <Image source={mark} />}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 30,
  },
});

export default FilterItem;
