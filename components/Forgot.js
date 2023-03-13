import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Forgot = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.MainWrapper}>
        <Image source={require('../assets/images/forget.png')} style={styles.image}/>
        <Text style={styles.topText}>Forgot Password</Text>
        <Text style={styles.subText}>Type your email, we will send you verification code via email</Text>
      </View>
      <View style={styles.eCon}>
        {/* <Text style={styles.econText}>Email</Text> */}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Verify')} activeOpacity={0.7}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Forgot

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#fff",
    },
    MainWrapper:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:45,
    },
    image:{
      width:250,
      height:200,
    },
    topText:{
      fontFamily:'poppins-semibold',
      fontSize:15,
    },
    subText:{
      color:'#555',
      marginTop:4,
      marginHorizontal:20,
      textAlign:'center',
    },
    eCon:{
      width:'90%',
      height:50,
      // backgroundColor:'#ccc',
      marginHorizontal:20,
      marginTop:25,
      borderRadius:15,
      borderWidth:1,
      borderColor:'#000'
    },
    // econText:{
    //   color:'#555',
    //   fontWeight:'400'
    // },
    button:{
      backgroundColor:"#6FB1AD",
      width:'90%',
      padding:15,
      borderRadius:10,
      alignItems:'center',
      marginHorizontal:20,
      marginTop:30,
    },
    buttonText:{
      color:'white',
      fontWeight:'700',
      fontSize:16,
    },
})