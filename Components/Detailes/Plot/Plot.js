import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import usePlot from '../../../hooks/usePlot';

const Plot = (props) => 
{
    const {id} = props
    const [plotData , setPlotData] = usePlot(id)


    const moviePlot = plotData[0]?.plot
    return (
        <View style={styles.plotView}>
            <Text>{moviePlot}</Text>
        </View>
    );
};

export default Plot;


const styles = StyleSheet.create({
    plotView : 
    {
        marginHorizontal : '10%',
        marginVertical : '2%'
    }
})