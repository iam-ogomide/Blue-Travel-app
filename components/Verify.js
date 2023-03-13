import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Verify = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.MainWrapper}>
        <View style={styles.imageCon}>
            <Image source={require('../assets/images/auth.png')} style={styles.image}/>
        </View>
        <Text style={styles.topText}>Verify Code</Text>
        <Text style={styles.subText}>The confirmation email was sent via email</Text>
        
      </View>

      <View style={styles.otpWrapper}>
        <View style={styles.otp}>
          <Text style={styles.otpText}>*</Text>
        </View>
        <View style={styles.otp}>
          <Text style={styles.otpText}>*</Text>
        </View>
        <View style={styles.otp}>
          <Text style={styles.otpText}>*</Text>
        </View>
        <View style={styles.otp}>
          <Text style={styles.otpText}>*</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Password')} activeOpacity={0.7}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Verify

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    MainWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50,
    },
    image:{
        width:200,
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
  otpWrapper:{
    flexDirection:'row',
    marginTop:30,
    marginHorizontal:20,
    justifyContent:'space-between',
  },
  otp:{
    width:60,
    height:60,
    borderRadius:15,
    borderWidth:1,
    borderColor:'#000',
    alignItems:"center",
    justifyContent:'center',
  },
  otpText:{
    fontSize:26,
    color:'gray'
  },
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