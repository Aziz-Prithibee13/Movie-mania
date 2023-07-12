import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';

const Result = (props) => {
    const { result } = props

    const [dramabackground, setDramaBackGround] = useState('')
    const [comedeybackground, setComedeyBackGround] = useState('')
    const [horrorbackground, setHorrorBackGround] = useState('')
    const [DramaWidth, setDramaWidth] = useState('');
    const [horrorWidth, setHorrorWidth] = useState('');
    const [comedeyWidth, setComedeyWidth] = useState('');
    const [width, setWidth] = useState('');
    useEffect(() => {
        if (result?.class === 'Drama') {
            setDramaBackGround("#F97B22")
            setDramaWidth(setWidth(toString((result?.score * 100).toFixed(2)) + '%'))
        }
        else if (result?.class === 'Horror') {
            setHorrorBackGround("#393646")
            setHorrorWidth(setWidth(toString((result?.score * 100).toFixed(2)) + '%'))
        }
        else {
            setComedeyBackGround('#9575DE')
            setComedeyWidth(setWidth(toString((result?.score * 100).toFixed(2)) + '%'))
        }

        if (result?.score) {

            setWidth(toString((result?.score * 100).toFixed(2)) + '%')
        }
        else
        {
            setWidth('0%')
        }

    }, [result])






    return (
        <View>
            <View style={{ width: width, backgroundColor:dramabackground||comedeybackground||horrorbackground }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Predicted : {result?.class} </Text>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Accuracy : {toString((result?.score * 100).toFixed(2)) + "%"} </Text>
            </View>
        </View>
    );
};

export default Result;