import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Filters from './src/screens/Filters';

import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/screens/Main';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {fetchCategories} from './src/store/actions';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App = () => {
  // @ts-ignore
  useEffect(() => store.dispatch(fetchCategories()), []);
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default App;
