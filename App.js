import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movies from './Components/Movies/Movies';


import Start from './Components/Home/Start/Start';
import Title from './UI/Title/Title';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home/Home/Home';



export default function App() {

  
const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <View style={styles.container}>
        

        <Stack.Navigator>
          <Stack.Screen name='Start' component={Start}/>
          <Stack.Screen name='home' component={Home}/>
          <Stack.Screen name='Movies' component={Movies}/>
        </Stack.Navigator>

      </View>
    </NavigationContainer>


  );
}



const styles = StyleSheet.create({
  container:
  {
    flex: 1,

  }
})