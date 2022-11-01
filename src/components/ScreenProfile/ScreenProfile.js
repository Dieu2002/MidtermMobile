import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Banner from '../Iterm/Banner';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../ScreenProduct/Loginpage';

const ScreenDetail = () => {
  return (
    <View style={styles.detail}>
    <Profile/>
    </View>
    
  );
};
const styles = StyleSheet.create({

  detail: {

  }

});

export default ScreenDetail;