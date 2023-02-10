import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movies from './Components/Movies/Movies';


import Start from './Components/Home/Start/Start';
import Title from './UI/Title/Title';



export default function App() {

 /*  console.log(); */
  return (
    <View  style={styles.container}>
      <Title>Hello</Title>
      <Movies></Movies>
      <Start></Start>
    </View>

  );
}



const styles = StyleSheet.create({
  container:
  {
    flex:1,
 
  }
})