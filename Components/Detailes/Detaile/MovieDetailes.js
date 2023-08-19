import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


const MovieDetailes = (props) => 
{
    const { detaile } = props;
    const keys = Object.keys(detaile)
    const values  = Object.values(detaile)

    
    const [right1 , setRight1] = useState(0)
    const [MaterialIconUpDown1 , setMaterialIconUpDown1] = useState('arrow-right')
    const [detaileshow , setDetaileShow] = useState(false)


    const handlePress = (value) =>
    {
        if (right1 === value) {
            setMaterialIconUpDown1('arrow-right')
            setDetaileShow(false)
            setRight1(0)
        }
        else {
            setMaterialIconUpDown1('arrow-drop-down')
            setDetaileShow(true)
            setRight1(value)
        }
    }

    return (
        <View>
            <Pressable onPress={()=>handlePress(1)}>
                    <View style={styles.pressableView}>
                        <MaterialIcon name={MaterialIconUpDown1} size={30} />
                        <Text style={styles.pressableText}>{keys[1]}</Text>
                    </View>
                </Pressable>
           {detaileshow ? <View style={styles.detailesView}>
                            <MaterialIcon name='arrow-right' size={30} />
                            <Text style={styles.text}>{values[1]}</Text> 
                        </View>  : null} 
        </View>
    );
};


const styles = StyleSheet.create({
    
    pressableView :
    {
        flexDirection : 'row',
        alignItems : 'center',
        marginVertical : 10,
        marginHorizontal : "5%"
    },
    pressableText :
    {
        fontSize : 25,
        fontWeight : 'bold'
    },
    detailesView : 
    {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        marginHorizontal : '10%',
        marginVertical : '2%',
    },
    text : 
    {
        fontSize : 15,
        fontWeight : 'bold'
    }
})

export default MovieDetailes;