import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Divider from '../../../UI/Divider/Divider';
import Email from '../Provider/Email';
import Google from '../Provider/Google';
const SignUp = ({navigation
}) => {
    const press = () =>
    {
        
        navigation.navigate('login')
    }
    return (
        <ScrollView>
            <View style={styles.signUpView}>
            <Text style={styles.header}>Sign Up Here</Text>
            <Email type="signup"/>
            <Divider></Divider>

            <Google type='sign up'></Google>
            <View style={styles.throughView}>
                <Text style={styles.outerThoroughTxt}>Already in Movie Mania?</Text>
                <Pressable onPress={press}><Text style={styles.thoroughTxt}>Login Here</Text></Pressable>
            </View>
        </View>
        </ScrollView>
        
    );
};

export default SignUp;


const styles = StyleSheet.create({
    signUpView :
    {
        elevation : 20,
        backgroundColor : '#FFFBEB',
        marginHorizontal: 30,
        marginVertical: 60,
        borderRadius : 15
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
        marginVertical : 10,
        
        marginVertical : '10%'
    },

    outerThoroughTxt:
    {
        fontSize: 18,
    },

    thoroughTxt:
    {
        color: '#E21818',
        fontSize : 18,

    }

})