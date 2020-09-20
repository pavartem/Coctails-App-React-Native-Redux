import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import mark from '../assets/img/mark.png';
import {useDispatch} from 'react-redux';
import {toggleCategory} from '../store/actions';
import {filterType} from '../store/store';

const FilterItem = ({filter}: {filter: filterType}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => dispatch(toggleCategory(filter.title))}>
      <Text>{filter.title}</Text>
      {filter.checked && <Image source={mark} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 30,
  },
});

export default FilterItem;
