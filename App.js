import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movies from './Components/Movies/Movies';


import Start from './Components/Home/Start/Start';
import Title from './UI/Title/Title';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Components/Home/Home/Home';
import CommingSoon from './Components/Shared/CommingSoon/CommingSoon';
import Login from './Components/Authentication/Login/Login';
import SignUp from './Components/Authentication/SignUp/SignUp';
import Classification from './Components/Classification/Classification';
import Feedback from './Components/Feedbacks/Feedback';
import DetaileTabs from './Components/Detailes/DetaileTabs';



export default function App() {


  const Stack = createNativeStackNavigator();


  return (
    <View style={styles.container}>
      <NavigationContainer>



        <Stack.Navigator>
          <Stack.Screen name='Start' component={Start} />
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='Movies' component={Movies} />
          <Stack.Screen name='Classify' component={Classification} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='feedback' component={Feedback} />
          <Stack.Screen name='Detailes' component={DetaileTabs} />
        </Stack.Navigator>



      </NavigationContainer>

    </View>

  );
}



const styles = StyleSheet.create({
  container:
  {
    flex: 1,

  }
})