import React from 'react';
import FilterItem from './FilterItem';
import {ScrollView, StyleSheet, View} from 'react-native';
import CustomButton from './CustomButton';

const FiltersList = () => {
  return (
    <View style={styles.filterList}>
      <ScrollView style={styles.items}>
        <FilterItem marked={false} />
        <FilterItem marked={true} />
        <FilterItem marked={true} />
        <FilterItem marked={true} />
        <FilterItem marked={true} />
        <FilterItem marked={true} />
        <FilterItem marked={true} />
        <FilterItem marked={true} />
        <FilterItem marked={true} />
        <FilterItem marked={true} />
        <FilterItem marked={true} />
        <FilterItem marked={false} />
      </ScrollView>
      <CustomButton />
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    overflow: 'hidden',
    maxHeight: '82%',
    paddingRight: 8,
  },
  filterList: {
    padding: 20,
  },
});

export default FiltersList;
