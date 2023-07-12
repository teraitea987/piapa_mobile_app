import React from "react";
import { Text } from "react-native";

import { Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Audio } from 'expo-av';
import { StyleSheet, View } from 'react-native';
import  { ABC_IMAGES } from "../constants/images";

const Piapa = (navigation) => {
    const playSound = async (sound) => {
    const soundObject = new Audio.Sound();
        try {
          await soundObject.loadAsync(sound);
          await soundObject.playAsync();
        } catch (error) {
          console.log(error);
        }
      };
    
      return (
        
          <View style={styles.container}>
            <Swiper style={styles.wrapper} showsButtons={true}>
            {ABC_IMAGES.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => playSound(image.sound)}>
            <Image style={styles.slide} source={image.uri} />
            </TouchableOpacity>
            ))}
            </Swiper>
        </View>
    
        );
}
const styles = StyleSheet.create({

	container: { 
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center'
  	},
	slide: {
		width: '100%',
		height: '100%'
	}
});

export default Piapa;