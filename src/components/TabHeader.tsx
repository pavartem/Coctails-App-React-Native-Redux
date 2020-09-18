import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import back from '../assets/img/back.png';

const TabHeader = () => {
  return (
    <View style={styles.headerBody}>
      <Image source={back} />
      <Text style={styles.headerTitle}>Drinks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBody: {
    flexDirection: 'row',
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
    marginLeft: 30,
  },
});

export default TabHeader;
