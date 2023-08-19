import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import useMovie from '../../../hooks/useMovie';
import Detaile from '../Detaile/Detaile';
import Map from '../Map/Map';
import Synopsis from '../Synopsis/Synopsis';

const General = (props) => {


    const { route } = props

    const id = route.params.id


    const [up, setup] = useState(0);
    const [up2, setup2] = useState(0);
    const [up3, setup3] = useState(0);
    const [synopsisShow, setSynopsysSHow] = useState(false)
    const [others, setOthers] = useState(false)
    const [mapShow, setMapShow] = useState(false)
    const [synopsysIconUpDown, setSynopsysIconUpDown] = useState('keyboard-arrow-down')
    const [othersIconUpDown, setOthersIconUpDown] = useState('keyboard-arrow-down')
    const [mapUpDown, setMapUpDown] = useState('keyboard-arrow-down')

    const [movie, setMovie] = useMovie(id)


    let movieDetailes = movie[0]

    const handlePress = (value) => {
        if (up === value) {
            setSynopsysIconUpDown('keyboard-arrow-down')
            setup(0)
            setSynopsysSHow(false)
        }
        else {
            setSynopsysIconUpDown('keyboard-arrow-up')
            setSynopsysSHow(true)
            setup(1)
        }
    }


    const handlePress2 = (value) => {
        if (up2 === value) {
            setOthersIconUpDown('keyboard-arrow-down')
            setup2(0)
            setOthers(false)
        }
        else {
            setOthersIconUpDown('keyboard-arrow-up')
            setOthers(true)
            setup2(1)

        }
    }

    const handlePress3 = (value) => {
        if (up3 === value) {
            setMapUpDown('keyboard-arrow-down')
            setup3(0)
            setMapShow(false)
        }
        else {
            setMapUpDown('keyboard-arrow-up')
            setMapShow(true)
            setup3(1)

        }
    }

    return (
        <ScrollView>


            <View style={styles.BtnView}>
                <Pressable android_ripple={{ color: '#ccc' }} onPress={() => handlePress2(1)}>
                    <View style={styles.btnInnerView}>

                        <Text style={styles.legend}>Detailes</Text>
                        <MaterialIcon name={othersIconUpDown} size={50} />
                    </View>
                </Pressable>

                {others ? <Detaile detaile={movieDetailes} /> : null}
            </View>

            <View style={styles.BtnView}>
                <Pressable android_ripple={{ color: '#ccc' }} onPress={() => handlePress(1)}>
                    <View style={styles.btnInnerView}>

                        <Text style={styles.legend}>Synopsys</Text>
                        <MaterialIcon name={synopsysIconUpDown} size={50} />
                    </View>
                </Pressable>

                {synopsisShow ? <Synopsis id={id} /> : null}
            </View>


            <View style={styles.BtnView}>
                <Pressable android_ripple={{ color: '#ccc' }} onPress = {() => handlePress3(1)}>
                    <View style={styles.btnInnerView}>

                        <Text style={styles.legend}>Origin</Text>
                        <MaterialIcon name={mapUpDown} size={50} />
                    </View>
                </Pressable>

            </View>
            { mapShow ? <Map detaile={movieDetailes}></Map> : null }

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
    },
    legend:
    {
        fontSize: 35,
        fontWeight: 'bold'
    }
})