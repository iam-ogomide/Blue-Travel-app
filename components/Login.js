import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>

      <Text style={styles.LoginText}>Log In</Text>

      {/* Body */}
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
       <TouchableOpacity onPress={() => navigation.navigate('Forgot')} activeOpacity={0.7}>
            <View style={styles.forgotCon}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </View>
       </TouchableOpacity>

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.SignCon}>
        <Text style={styles.SignText}>You don't have an account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} activeOpacity={0.7}>
          <Text style={{color:"#293071", fontWeight:'700',marginLeft:5}}>Register</Text>
        </TouchableOpacity>
        
      </View>


      <View style={styles.bottomline}>
        <Text style={styles.bottomlineText}>Or continue with</Text>
      </View>

      <View style={styles.FinalCon}>
        <Image source={require('../assets/images/google.png')} style={styles.FinalConImage} />
        <Text style={styles.FinalConText}>Google</Text>
      </View>
      <View style={styles.FinalCon}>
        <Image source={require('../assets/images/apple.png')} style={styles.FinalConImage} />
        <Text style={styles.FinalConText}>Apple</Text>
      </View>

      </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    LoginText:{
        fontWeight:"bold",
        marginHorizontal:33,
        marginTop:20,
        fontSize:25,
        marginTop:55,
        alignSelf:"center"
      },
    
      BodyCon:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
      },
      inputContainer:{
        width:'80%',
      },
      input:{
        backgroundColor:'#ffffff',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:7,
        backgroundColor:'#ccc'
      },
      textInputie:{
        paddingHorizontal:15,
        paddingVertical:20,
        backgroundColor:'#ffffff',
        borderRadius:10,
        marginTop:7,
        borderWidth:1,
        borderColor:"#293071",
      },
      ContactText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#555',
        marginTop:10,
      },
      forgotCon:{
        alignItems:'flex-end',
        marginRight:20,
        marginTop:5
      },
      forgotText:{
        fontWeight:'700',
        color:'#555'
      },
      buttonContainer:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
      },
      button:{
        backgroundColor:"#6FB1AD",
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
      },
      buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
      },
      SignCon:{
        flexDirection:'row',
        marginTop:8
      },
      SignText:{
        color:'#555',
        fontWeight:'700'
      },
      bottomline:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        borderBottomWidth:1,
        borderBottomColor:'#d0d8dc',
        height:30,
      },
      bottomlineText:{
        color:"#555",
        fontWeight:'500'
    },
    FinalCon:{
        marginTop:20,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        width:'80%',
        height:60,
        borderRadius:20,
        borderColor:'#d0d8dc',
        borderWidth:1,
    },
    FinalConImage:{
        width:40,
        height:40,
    },
    FinalConText:{
        marginLeft:10,
        fontSize:15,
    },
    
})