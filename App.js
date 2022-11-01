import { View, Text } from 'react-native';
import React from 'react';
import ScreenProduct from './src/components/ScreenProduct/ScreenProduct';
import ScreenDetail from './src/components/ScreenDetail/ScreenDetail';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import ScreenProfile from './src/components/ScreenProfile/ScreenProfile';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ScreenProduct} />
        <Stack.Screen name="Details" component={ScreenDetail} />
        <Stack.Screen name="Profile" component={ScreenProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 

export default App;