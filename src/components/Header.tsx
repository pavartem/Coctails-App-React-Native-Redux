import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import filter from '../assets/img/filter.png';

const Header = () => {
  return (
    <View style={styles.headerBody}>
      <Text style={styles.headerTitle}>Drinks</Text>
      <Image source={filter} />
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
    elevation: 10,
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
