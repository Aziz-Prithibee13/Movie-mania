import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Result from "./Result"
const Results = (props) => 
{
    const {prediction} = props;

    return (
        <View style={styles.OuterView}>
            <Text>Classification Result</Text>{/* 
            {prediction.map(result => <Result key = {result?.class} result={result}/>)}  */}
        </View>
    );
};

export default Results;


const styles = StyleSheet.create({
    OuterView :
    {
        elevation : 10,
        backgroundColor : '#fff',
        marginHorizontal : 'auto',
        borderRadius : 15,
        padding: '5%',
        margin : '10%'

    }
})