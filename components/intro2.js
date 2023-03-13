import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const intro2 = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/vil2.jpg')} style={styles.mainImage}>
        <View style={styles.bodyCon}>
            <Text style={styles.title}>Make your own private travel plans</Text>
            <Text style={styles.subTitle}>Formulate your strategy to enjoy top tier accomodation</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Intro3')} activeOpacity={0.7}>
                <View style={styles.ButtonWrapper}>
                    <Text style={styles.ButtonText}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    </View>
  )
}

export default intro2

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#fff",
  },
  mainImage:{
      height:'100%',
      width:'100%',
  },
  bodyCon:{
      marginHorizontal:20,
      position:'absolute',
      bottom:70
  },
  title:{
      color:"#fff",
      fontSize:40,
      fontFamily:'poppins-bold'
  },
  subTitle:{
      color:'#fff',
      fontSize:16,
      fontFamily:'poppins-regular'
  },
  ButtonWrapper:{
      backgroundColor: "rgba(111,177,173,1)",
      borderRadius:50,
      paddingVertical:15,
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
  },
  ButtonText:{
      color:'#fff',
      fontSize:17,
      fontWeight:'bold',
  },
})