import React from 'react';
import Header from '../components/Header';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import ItemList from '../components/ItemList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAdditionalItems} from '../store/actions';

const Main = () => {
  const filters = useSelector(({filters}) => filters);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          {filters
            .filter((el) => el.checked && el.loaded)
            .map((el) => (
              <ItemList query={el.title} key={el.title} />
            ))}
          {filters.find((el) => el.checked && !el.loaded) && (
            <Button
              title="Load more"
              onPress={() => {
                dispatch(
                  fetchAdditionalItems(
                    filters.find((el) => el.checked && !el.loaded).title,
                  ),
                );
              }}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ccc',
  },
  body: {
    backgroundColor: '#fff',
  },
});

export default Main;
