import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Filters from './src/screens/Filters';

import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/screens/Main';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App = () => {
  return (
    <View style={styles.app}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Filters"
            component={Filters}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default App;
