import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const MainIntro = ({navigation}) => {
    setTimeout(()=> {
        navigation.navigate('intro1')
    },3000)
    const [loaded] = useFonts({
        'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'poppins-extrabold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
        'poppins-light': require('../assets/fonts/Poppins-Light.ttf'),
        'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    });
    
    if (!loaded) {
        return null;
    }
  return (
    <View style={styles.container}>
      <Text style={styles.blue}>BLUE</Text>
      <Text style={styles.small}>Explore the world with us.</Text>
    </View>
  )
}

export default MainIntro

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    blue: {
        color: "rgba(111,177,173,1)",
        fontSize: 40,
        fontFamily:'poppins-bold',
      },
    small: {
        color: "rgba(111,177,173,1)",
        fontSize: 18,
        marginTop: 2,
        fontFamily:'poppins-regular',
      }
  });