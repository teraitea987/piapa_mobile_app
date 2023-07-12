import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import Exo from './components/Exo';
import Piapa from './components/Piapa';
import QuizzPiapa from './components/QuizzPiapa';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Exo" component={Exo} />
        <Stack.Screen name="Piapa" component={Piapa} />
        <Stack.Screen name="QuizzPiapa" component={QuizzPiapa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


