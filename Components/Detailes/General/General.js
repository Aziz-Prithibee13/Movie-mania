import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Map from '../Map/Map';
import Synopsis from '../Synopsis/Synopsis';

const General = () => {

    const [up, setup] = useState(0);
    const [synopsisShow, setSynopsysSHow] = useState(false)
    const [materialIconUpDown, setMaterialIconUpDown] = useState('keyboard-arrow-down')

    const handlePress = (value) => {
        if (up === value) {
            setMaterialIconUpDown('keyboard-arrow-down')
            setup(0)
            setSynopsysSHow(false)
        }
        else {
            setMaterialIconUpDown('keyboard-arrow-up')
            setSynopsysSHow(true)
            setup(1)

        }
    }

    return (
        <ScrollView>
            <View style={styles.BtnView}>
                <Pressable android_ripple={{ color: '#ccc' }} onPress={() => handlePress(1)}>
                    <View style={styles.btnInnerView}>

                        <Text>Synopsys</Text>
                        <MaterialIcon name={materialIconUpDown} size={50} />
                    </View>
                </Pressable>
                
            {synopsisShow ? <Synopsis /> : null}
            </View>


            <View style={styles.BtnView}>
                <Pressable android_ripple={{ color: '#ccc' }}><View style={styles.btnInnerView}>

                    <Text>Synopsys</Text>
                    <MaterialIcon name='keyboard-arrow-down' size={50} />
                </View>
                </Pressable>
            </View>
            <View style={styles.BtnView}>
                <Pressable android_ripple={{ color: '#ccc' }}>
                    <View style={styles.btnInnerView}>

                        <Text>Synopsys</Text>
                        <MaterialIcon name='keyboard-arrow-down' size={50} />
                    </View>
                </Pressable>
            </View>
            {/* <Map/> */}
        </ScrollView>
    );
};

export default General;

const styles = StyleSheet.create({
    BtnView:
    {
        margin: '10%',
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 15

    },
    btnInnerView:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '5%'
    }
})