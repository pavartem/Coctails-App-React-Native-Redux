import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CustomButton = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>APPLY</Text>
    </View>
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
