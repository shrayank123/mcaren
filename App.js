import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar} from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';


import HomeScreen from "./screens/homescreen";
import Teams from "./screens/teams";
import Stands from "./screens/standings";

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="homescreen.js" component={HomeScreen} />
        <Stack.Screen name="standings.js" components={Stands}/>
        <Stack.Screen name="teams.js" components={Teams}/>
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//The code 18 and 19 makes the default screen as the homescreen.