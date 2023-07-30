import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Lottie from 'lottie-react-native'


const RequireModal = (props) => {
    const { visible, setVisible } = props

    const closeModal = () => {
        setVisible(false)
    }
    return (

        <Modal visible={visible}>
            <View style={{ flex: 1 }}>
                <View style={styles.closed}>
                    <Pressable onPress={closeModal}>

                        <AntDesign name="close" size={42} color="#D21312" />
                    </Pressable>
                </View>

                <View style={styles.warning}>
                <Lottie style={styles.securityAnimation} source={require('../../assets/animation_lkprudbt.json')} autoPlay loop />

                    <Text style={styles.warningText}>Please Log In First!!!!</Text>
                    <Text style={styles.suggestion}>Click X and then Click on bottom right tab to login</Text>
                </View>
            </View>
        </Modal>

    );
};

export default RequireModal;

const styles = StyleSheet.create({
    warning: {
        margin: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closed: 
    {
        margin:10,
        marginLeft:'auto'
    },
    warningText :
    {
        marginVertical : 10,
        fontWeight : 'bold',
        fontSize : 30, 
        color :'#FBD85D'
    }
    ,
    suggestion : 
    {
        fontWeight : 'bold',
        fontSize : 20, 
        color :'#78C1F3'
    },
    securityAnimation :
    {
        width:"100%",
    }
})