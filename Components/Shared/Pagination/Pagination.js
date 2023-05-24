import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const Pagination = (props) => 
{
     const { number , setPage } = props

     const pageNumber =  number+1


    return <Button 
    style={styles.pageBtn}
    title={pageNumber.toString()}
    onPress={() => setPage(number)} 
    

    />
};

export default Pagination;


const styles = StyleSheet.create({
    pageBtn : {
        height : 30,
        width : 70,
        backgroundColor: 'white',
        color : "#19A7CE"
    }
})