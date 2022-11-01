import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import Banner from '../Iterm/Banner';
import TopProducts from './TopProducts';
import AllProducts from './AllProducts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ScreenProduct = ({ navigation }) => {

  return (
    < >
      <Button
        onPress={() => navigation.navigate('Profile')}
        title='go to profile'
        style={styles.buttonBack}> Back
      </Button>
     
      <View style={styles.banner}>
        <Banner />
      </View>
      <View style={styles.title}>
        <Text>Diabetic Diet</Text>
      </View>
      <View style={styles.topProduct}>
        <TopProducts />
      </View>
      <View style={styles.title_a}>
        <Text>All Products</Text>
      </View>
      <View style={styles.all_product}>
        <AllProducts />
      </View>
    </ >
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: 'red',
  },
  title: {
    width: 94,
    height: 25,
    left: 24,
    top: 60,
  },
  title_a: {
    width: 94,
    height: 25,
    top: 30,
  },
  all_product: {
    top: 10,
  }

});

export default ScreenProduct;