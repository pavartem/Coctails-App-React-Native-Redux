import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import filter from '../assets/img/filter.png';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerBody}>
      <Text style={styles.headerTitle}>Drinks</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
        <Image source={filter} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    padding: 20,
    elevation: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
