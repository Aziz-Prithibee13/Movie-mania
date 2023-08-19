import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Plot from '../Plot/Plot';

const Synopsis = (props) => 
{
    const {id} = props


    const [right1 , setRight1] = useState(0)
    const [right2 , setRight2] = useState(0)
    const [MaterialIconUpDown1 , setMaterialIconUpDown1] = useState('arrow-right')
    const [MaterialIconUpDown2 , setMaterialIconUpDown2] = useState('arrow-right')
    const [plotSHow , setPlotShow] = useState(false)
    const [castShow , setCastShow] = useState(false)


    const handlePress = (value) =>
    {
        if (right1 === value) {
            setMaterialIconUpDown1('arrow-right')
            setPlotShow(false)
            setRight1(0)
        }
        else {
            setMaterialIconUpDown1('arrow-drop-down')
            setPlotShow(true)
            setRight1(value)
        }
    }



    return (
        <View style={styles.innerView}>
            <View>
                <Pressable onPress={()=>handlePress(1)}>
                    <View style={styles.pressableView}>
                        <MaterialIcon name={MaterialIconUpDown1} size={30} />
                        <Text style={styles.pressableText}>Plot</Text>
                    </View>
                </Pressable>
                {plotSHow ? <Plot id={id}/> : null}
            </View>

            
            
        </View>

    );
};

export default Synopsis;

const styles = StyleSheet.create({
    innerView:
    {
        borderRadius : 15,
        borderWidth : 3,
        borderColor : 'black',
        marginHorizontal :"4%",
        marginVertical : '5%' 
    },
    pressableView :
    {
        flexDirection : 'row',
        alignItems : 'center'
    },
    pressableText :
    {
        fontSize : 20,
        fontWeight : 'bold'
    }

})