import { Image, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView,TextInput } from 'react-native';
import React, { useState } from 'react';

const Password = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.MainWrapper}>
        <Image source={require('../assets/images/pass.png')} style={styles.image}/>
        <Text style={styles.topText}>Create Password</Text>
        <Text style={styles.subText}>Create your new password</Text>
      </View>

      <KeyboardAvoidingView style={styles.BodyCon} behavior='height'>
      <View style={styles.inputContainer}>
        <Text style={styles.ContactText}>Email address</Text>
        <TextInput 
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input} 
        />
        <Text style={styles.ContactText}>Password</Text>
        <TextInput 
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={styles.input} 
        />

      </View>
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={() => navigation.navigate('Successful')} activeOpacity={0.7}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>


    </View>
  )
}

export default Password

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
    BodyCon:{
        alignItems:'center',
        marginTop:10,
      },
    inputContainer:{
        width:'90%',
      },
      input:{
        backgroundColor:'#ffffff',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:7,
        backgroundColor:'#ccc'
      },
      ContactText:{
        fontSize:14,
        fontWeight:'bold',
        color:'#555',
        marginTop:10,
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