import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import popular from '../assets/data/Popular';

const {width} = Dimensions.get('window')

const Card = ({data, navigation}) => {
  return (
    <TouchableOpacity style={styles.MainCard} activeOpacity={0.7} onPress={()=>navigation.navigate("Details",data)}>
      <Image source={data.image} style={styles.CardImage}/>
      <View style={styles.CardDetailsCon}>
        <Text style={styles.CardDetailsText}>{data.spot}</Text>
        <Text style={styles.CardDetailsSubText}> eaque ipsa quae ab illo inventore veritati</Text>
        <View style={styles.bottomCon}>
          <View style={styles.RightbottomCon}>
            <Icon name='map-marker' size={24} color="#6FB1AD" />
            <Text style={styles.Country}>{data.country}</Text>
          </View>
          <View style={styles.LeftbottomCon}>
            <Icon name='star' size={24} color="yellow" />
            <Text style={styles.Ratings}>{data.ratings}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>

      {/* Header */}
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Welcome back, Mide.</Text>
        <Image source={require('../assets/images/creator4.jpg')} style={styles.headerImage}/>
      </View>
      <View style={styles.SearchWrapper}>
        <Text style={styles.SearchText}>Where to next?</Text>
        <Ionicons name='search' size={25} color='#ccc' style={{marginRight:10}}/>
      </View>

      {/* Explore */}
      <View style={styles.exploreCon}>
        <Text style={styles.exploreText}>Explore</Text>
        <Text style={styles.exploreSubText}>See all</Text>
      </View>

      {/* Explore List */}
      <View style={styles.ListWrapper}>
        <View style={styles.ListImageWrapper}>
          <Image source={require('../assets/images/villa4.jpg')} style={styles.ListImage}/>
        </View>
        <View style={styles.ListImageWrapper}>
          <Image source={require('../assets/images/vil3.jpg')} style={styles.ListImage}/>
        </View>
        <View style={styles.ListImageWrapper}>
          <Image source={require('../assets/images/vil2.jpg')} style={styles.ListImage}/>
        </View>
        <View style={styles.ListImageWrapper}>
          <Image source={require('../assets/images/bea1.jpg')} style={styles.ListImage}/>
        </View>
        <View style={styles.ListImageWrapper}>
          <Image source={require('../assets/images/bea2.jpg')} style={styles.ListImage}/>
        </View>
      </View>

      {/* Popular */}
      <View style={styles.exploreCon}>
        <Text style={styles.exploreText}>Popular trips</Text>
        <Text style={styles.exploreSubText}>See all</Text>
      </View>

      {/* PopularList */}
      <FlatList 
        data={popular}
        renderItem={({item}) => <Card data={item} navigation={navigation}/>}
        horizontal
      />


      {/* Most Popular Places */}
      <View style={styles.exploreCon}>
        <Text style={styles.exploreText}>Most Popular Places</Text>
      </View>

      <View style={styles.FinalBottomWrapper}>
        <View style={styles.RightFinalBottom}>
          <Image source={require('../assets/images/img1.jpg')} style={styles.FinalBottomImage}/>
        </View>
        <View style={styles.LeftFinalBottom}>
          <View style={styles.Topic}>
            <Text style={styles.TopicText}>Guatemala</Text>
            {/* <Icon name='heart' size={24} color="#6FB1AD" /> */}
          </View>
          <Text style={styles.TopicSub}>e omnis isteem asantiutotam rem aperiam, eaque ipsa quae ab illo inventore veritati</Text>
          <View style={styles.FinalCon}>
            <View style={styles.FinalConContain}>
            <Icon name='star' size={24} color="yellow" />
              <Text style={styles.Rate}>4.6</Text>
            </View>
          </View>
        </View>
      </View>


      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  headerWrapper:{
    marginTop:40,
    marginHorizontal:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  headerText:{
    fontFamily:'poppins-semibold',
    fontSize:20,
  },
  headerImage:{
    width:50,
    height:50,
    borderRadius:50,
  },
  SearchWrapper:{
    width:'90%',
    height:50,
    backgroundColor:'white',
    marginHorizontal:20,
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:20,
    shadowColor:'#A8A8A8',
    shadowRadius:5,
    shadowOpacity:0.2,
    shadowOffset:{height:5},
    elevation:5,
  },
  SearchText:{
    marginLeft:20,
    fontSize:15,
    color:'#ccc'
  },
  exploreCon:{
    marginTop:15,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  exploreText:{
    fontSize:17,
    fontWeight:'bold',
  },
  exploreSubText:{
    fontSize:17,
    fontWeight:'500',
    color:'#a6a6a6'
  },
  ListWrapper:{
    marginTop:20,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  ListImageWrapper:{
    width:60,
    height:60,
    borderRadius:60,
    borderWidth:2,
    borderColor:"#6FB1AD",
    resizeMode:'contain',
  },
  ListImage:{
    width:'100%',
    height:'100%',
    borderRadius:60,
  },
  MainCard:{
    height:250,
    width:width*0.55,
    backgroundColor:'#ffffff',
    marginLeft:20,
    shadowColor:'#A8A8A8',
    borderRadius:20,
    marginTop:20,
  },
  CardImage:{
    width:'100%',
    height:'100%',
    borderRadius:20,
  },
  CardDetailsCon:{
    height:100,
    width:"100%",
    position:'absolute',
    backgroundColor:'rgba(0,0,0,0.4)',
    bottom:0,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    paddingHorizontal:20
  },
  CardDetailsText:{
    color:'#ffffff',
    fontSize:15,
    fontFamily:'poppins-semibold',
  },
  CardDetailsSubText:{
    color:'#ffffff',
  },
  bottomCon:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  RightbottomCon:{
    flexDirection:'row',
    alignItems:'center',
  },
  Country:{
    color:'#ffffff',
    fontSize:15,
    fontFamily:'poppins-semibold',
    paddingLeft:5
  },
  LeftbottomCon:{
    flexDirection:'row',
    alignItems:'center',
  },
  Ratings:{
    color:'#ffffff',
    fontSize:15,
    fontFamily:'poppins-semibold',
    paddingLeft:5,
    marginTop:5,
  },
  FinalBottomWrapper:{
    marginTop:20,
    marginHorizontal:20,
    flexDirection:'row',
    // width:'90%',
    overflow:'hidden',
  },
  RightFinalBottom:{
    width:150,
    height:150,
    resizeMode:'contain',
  },
  FinalBottomImage:{
    width:'100%',
    height:'100%',
  },
  LeftFinalBottom:{
    marginLeft:10,
  },
  Topic:{
  },
  TopicText:{
    fontSize:15,
    fontFamily:'poppins-semibold',
    marginBottom:7
  },
  TopicSub:{},
  FinalCon:{
    flexDirection:'row',
  },
  FinalConContain:{
    flexDirection:'row',
    marginTop:10,
  },
  Rate:{
    fontSize:15,
    fontFamily:'poppins-semibold',
    paddingLeft:5,
  },
})