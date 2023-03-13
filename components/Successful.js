import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Successful = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Icon name='checkbox-marked-circle-outline' size={250} color={"#6FB1AD"}/>
        <Text style={styles.topText}>Successfully Registered</Text>
        <Text style={styles.subText}>Congratulation, your account has been registered</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Thank You</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Successful

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
    },
    topText:{
        fontFamily:'poppins-semibold',
        fontSize:18,
      },
      subText:{
        color:'#555',
        marginTop:4,
        marginHorizontal:20,
        textAlign:'center',
    },
    button:{
        backgroundColor:"#6FB1AD",
        width:'90%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginHorizontal:20,
        marginTop:70,
      },
      buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
      },
})