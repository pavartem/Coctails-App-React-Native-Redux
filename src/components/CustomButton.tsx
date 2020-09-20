import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchItems} from '../store/actions';
import {filterType} from '../store/store';

const CustomButton = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const filtersData = useSelector(
    ({filters}: {filters: Array<filterType>}) => filters,
  );
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        const checkedFilter = filtersData.find((el) => el.checked);
        if (checkedFilter) {
          dispatch(fetchItems(checkedFilter.title));
        }
        navigation.navigate('Home');
      }}>
      <Text style={styles.buttonText}>APPLY</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 53,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
