import React from 'react';
import FilterItem from './FilterItem';
import {ScrollView, StyleSheet, View} from 'react-native';
import CustomButton from './CustomButton';
import {useSelector} from 'react-redux';

const FiltersList = () => {
  const filters = useSelector(({filters}) => filters);
  return (
    <View>
      <ScrollView style={styles.items}>
        {filters.map((filter) => (
          <FilterItem filter={filter} key={filter.title} />
        ))}
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
});

export default FiltersList;
