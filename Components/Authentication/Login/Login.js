import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Divider from '../../../UI/Divider/Divider';
import Email from '../Provider/Email';
import Google from '../Provider/Google';

const Login = (props) => 
{
    const { navigation } = props

    const press = () =>
    {
        
        navigation.navigate('SignUp')
    }
    return (
        <View style={styles.loginView}>
            <Text style={styles.header}>Login Here</Text>
            <Email type="signin" />
            <Divider></Divider>
            <Google type="Login"></Google>

            <View style={styles.throughView}>
                <Text style={styles.outerThoroughTxt}>New in Movie Mania?</Text>

                <Pressable onPress={press}><Text style={styles.thoroughTxt}>Register Here</Text></Pressable>
            </View>

        </View>
    );
};

export default Login;


const styles = StyleSheet.create({
    loginView: {
        elevation: 20,
        backgroundColor: "#FFFBF5",
        marginHorizontal: 30,
        marginVertical: 60
    },
    header:
    {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 40,
        color: '#FFC26F'
    },

    throughView : 
    {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : 10
    },

    outerThoroughTxt:
    {
        fontSize: 18,
    },

    thoroughTxt:
    {
        color: '#E21818',
        fontSize : 18

    }
})