import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Details = ({navigation, route}) => {
    const data = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={data.image} style={styles.mainImage}>
        <Icon name='arrow-left' color={'#ffffff'} size={26} onPress={()=> navigation.goBack()} style={{marginHorizontal:20,marginTop:40}}/>
        <View style={styles.bodyWrapper}>
            <Text style={styles.bodyTitle}>{data.spot}</Text>
            <Text style={styles.bodySubText}> excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem r</Text>
            <View style={styles.reviewCon}>
                <View style={styles.RightreviewCon}>
                    <Icon name='star' size={24} color={'yellow'} />
                    <Text style={styles.RightRate}>{data.ratings}</Text>
                </View>
                <Text style={styles.RightText}>See all reviews</Text>
            </View>

            <View style={styles.btnCon}>
                <View style={styles.right}>
                    <Text style={styles.rightText}>Enter The Plan</Text>
                </View>
                <View style={styles.left}>
                    <Text style={styles.leftText}>View Others</Text>
                </View>
                
            </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    mainImage:{
        height:'100%',
        width:'100%',
    },
    bodyWrapper:{
        marginHorizontal:20,
        position:'absolute',
        bottom:70
    },
    bodyTitle:{
        color:"#fff",
        fontSize:35,
        fontFamily:'poppins-bold'
    },
    bodySubText:{
        color:"#fff",
        fontSize:15,
        fontFamily:'poppins-regular'
    },
    reviewCon:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    RightreviewCon:{
        flexDirection:'row',
        alignItems:'center',
    },
    RightRate:{
        color:"#fff",
        fontSize:17,
        fontFamily:'poppins-regular'
    },
    RightText:{
        color:"#fff",
        fontSize:15,
        fontFamily:'poppins-regular'
    },
    btnCon:{
        marginTop:25,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    right:{
        backgroundColor:'rgba(0,0,0,0.7)',
        width:150,
        height:50,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    left:{
        backgroundColor:'white',
        width:150,
        height:50,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    rightText:{
        color:"#fff",
        fontSize:14,
        fontFamily:'poppins-regular'
    },
    leftText:{
        color:"#000",
        fontSize:14,
        fontFamily:'poppins-regular'
    },
})