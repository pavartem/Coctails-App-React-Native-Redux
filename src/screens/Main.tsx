import React from 'react';
import Header from '../components/Header';
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ItemList from '../components/ItemList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAdditionalItems} from '../store/actions';
import {filterType} from '../store/store';

const Main = () => {
  const filters = useSelector(
    ({filters}: {filters: Array<filterType>}) => filters,
  );
  const isLoading = useSelector(({loading}: {loading: boolean}) => loading);
  const dispatch = useDispatch();
  const choosenItems = filters.filter((el) => el.checked && el.loaded);
  const checkedNotLoadedItem = filters.find((el) => el.checked && !el.loaded);

  return (
    <>
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {choosenItems.length ? (
          <View style={styles.body}>
            {choosenItems.map((el) => (
              <ItemList query={el.title} key={el.title} />
            ))}
            {checkedNotLoadedItem && (
              <View style={{padding: 20, paddingTop: 0}}>
                <Button
                  title="Load more"
                  color="#000"
                  onPress={() => {
                    dispatch(fetchAdditionalItems(checkedNotLoadedItem.title));
                  }}
                />
              </View>
            )}
            {isLoading && (
              <ActivityIndicator
                color="#000000"
                size="large"
                style={styles.spinner}
              />
            )}
          </View>
        ) : (
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text>There are no items, please specify some filters</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  body: {
    backgroundColor: '#fff',
  },
  spinner: {
    marginTop: 30,
  },
});

export default Main;
