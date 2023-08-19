import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MovieDetailes from './MovieDetailes';

const Detaile = (props) => {
    const { detaile } = props;

    const financial = [{id : 1, cost: detaile.cost }, {id : 2, income: detaile.income }]
    const movieDetailes = [{id : 1, name : detaile.name}, {id : 2, genre : detaile.genre} , {id : 3, type : detaile.type} , {id : 4, language : detaile.language}]
    const releaseDetailes = [{id : 1, year : detaile.relase_year}, {id : 2, date : detaile.release_date} , {id : 3, country : detaile.release_country}]







    const [right1, setRight1] = useState(0)
    const [right2, setRight2] = useState(0)
    const [right3, setRight3] = useState(0)
    const [movieShow , setmovieShow] = useState(false)
    const [financialShow , setFinancialShow] = useState(false)
    const [releaseShow , setReleaseShow] = useState(false)
    const [MaterialIconUpDown1, setMaterialIconUpDown1] = useState('arrow-right')
    const [MaterialIconUpDown2, setMaterialIconUpDown2] = useState('arrow-right')
    const [MaterialIconUpDown3, setMaterialIconUpDown3] = useState('arrow-right')
    const [MaterialIconUpDown4, setMaterialIconUpDown4] = useState('arrow-right')



    const handlePress = (value) => {
        if (right1 === value) {
            setMaterialIconUpDown1('arrow-right')
            setmovieShow(false)
            setRight1(0)
        }
        else {
            setMaterialIconUpDown1('arrow-drop-down')
            setmovieShow(true)
            setRight1(value)
        }
    }


    const handlePress2 = (value) => {

        if (right2 === value) {
            setMaterialIconUpDown2('arrow-right')
            setFinancialShow(false)
            setRight2(0)
        }
        else {
            setMaterialIconUpDown2('arrow-drop-down')
            setFinancialShow(true)
            setRight2(value)
        }

    }


    const handlePress3 = (value) => {

        if (right3 === value) {
            setMaterialIconUpDown3('arrow-right')
            setReleaseShow(false)
            setRight3(0)
        }
        else {
            setMaterialIconUpDown3('arrow-drop-down')
            setReleaseShow(true)
            setRight3(value)
        }
    }


    return (
        <View>
            <View style={styles.innerView}>
                <View>
                    <Pressable onPress={() => handlePress(1)}>
                        <View style={styles.pressableView}>
                            <MaterialIcon name={MaterialIconUpDown1} size={30} />
                            <Text style={styles.pressableText}>Movie Detailes</Text>
                        </View>
                    </Pressable>

                    {movieShow? movieDetailes.map(detaile => <MovieDetailes key={detaile.id} detaile = {detaile}/>): null}
                </View>



            </View>
            <View style={styles.innerView}>
                <View>
                    <Pressable onPress={() => handlePress2(1)}>
                        <View style={styles.pressableView}>
                            <MaterialIcon name={MaterialIconUpDown2} size={30} />
                            <Text style={styles.pressableText}>Financial Detailes</Text>
                        </View>
                    </Pressable>
                    {financialShow ? financial.map(detaile => <MovieDetailes key={detaile.id} detaile={detaile}/>) : null}
                </View>



            </View>
            <View style={styles.innerView}>
                <View>
                    <Pressable onPress={() => handlePress3(1)}>
                        <View style={styles.pressableView}>
                            <MaterialIcon name={MaterialIconUpDown3} size={30} />
                            <Text style={styles.pressableText}>Release Detailes</Text>
                        </View>
                    </Pressable>
                    {releaseShow? releaseDetailes.map(detaile => <MovieDetailes key={detaile.id} detaile = {detaile} />) : null}
                </View>



            </View>
        </View>
    );
};

export default Detaile;


const styles = StyleSheet.create({
    innerView:
    {
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'black',
        marginHorizontal: "4%",
        marginVertical: '5%'
    },
    pressableView:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pressableText:
    {
        fontSize: 30,
        fontWeight: 'bold'
    }

})