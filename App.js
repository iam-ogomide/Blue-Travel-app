import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import MainIntro from './components/MainIntro';
import intro1 from './components/intro1';
import intro2 from './components/intro2';
import intro3 from './components/intro3';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Forgot from './components/Forgot';
import Verify from './components/Verify';
import Password from './components/Password';
import Successful from './components/Successful';
import BottomNavigator from './views/BottomNavigator';
import Details from './components/Details';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainIntro" component={MainIntro} options={{headerShown:false}}/>
        <Stack.Screen name="intro1" component={intro1} options={{headerShown:false}}/>
        <Stack.Screen name="intro2" component={intro2} options={{headerShown:false}}/>
        <Stack.Screen name="Intro3" component={intro3} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Forgot" component={Forgot} options={{headerShown:false}}/>
        <Stack.Screen name="Verify" component={Verify} options={{headerShown:false}}/>
        <Stack.Screen name="Password" component={Password} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="Successful" component={Successful} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={BottomNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
