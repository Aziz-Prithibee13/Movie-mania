import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Plot = () => {
    return (
        <View style={styles.plotView}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at lorem mi. Donec diam nisl, condimentum ut ante eu, scelerisque faucibus nibh. Nunc eget molestie justo. Vivamus sollicitudin metus ut lorem ultricies condimentum placerat vitae libero. In sed malesuada metus, et tincidunt nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sollicitudin accumsan risus vitae convallis. Aenean pulvinar eu purus sed commodo. Pellentesque convallis, risus at mattis sagittis, dui metus tincidunt leo, lobortis venenatis sem elit eget sem. Suspendisse et purus tellus. Aliquam nec nisi in lectus dapibus ornare eget sed quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
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