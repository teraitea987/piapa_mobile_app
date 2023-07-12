import React from 'react';
import { Button, View } from 'react-native';

const HomeScreen = ( {navigation} ) => {
  return (
    <View>
      <Button title="Exo" onPress={() => navigation.navigate('Exo')} />
      <Button title="Quizz" onPress={() => navigation.navigate('QuizzPiapa')} />
      <Button title="Piapa" onPress={() => navigation.navigate('Piapa')} />
    </View>
  );
}

export default HomeScreen;