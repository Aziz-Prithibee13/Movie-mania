import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {gsap, Power2, Elastic, AutoKillTweens} from 'gsap-rn';

class GsapLoading extends Component
{
    boxes = [];

    onPress(){
	// Using AutoKillTweens.tweensOf method to kill a specific tween
	AutoKillTweens.tweensOf(this.tl);
	// We mantain the reference of the tween directly in the Class
        this.tl = gsap.timeline();
        this.tl.to(this.boxes, {duration:1, transform:{y:-100, scale:0.8}, ease:Power2.easeInOut, stagger: {amount: 0.3}});
        this.tl.to(this.boxes, {duration:0.3, transform:{y:0, scale:1 }, ease:Elastic.easeOut, stagger: {amount: 0.3}});
    }

    render() {
        return (
		<View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
			
			<AutoKillTweens tweens={this} />
			<View style={{flexDirection:"row"}}>
			    <View ref={ ref=>this.boxes.push(ref) } style={styles.box} />
			    <View ref={ ref=>this.boxes.push(ref) } style={styles.box} />
			    <View ref={ ref=>this.boxes.push(ref) } style={styles.box} />
			</View>
			<TouchableOpacity onPress={this.onPress.bind(this)}>
			    <Text ref={ref=>this.text = ref} style={[styles.button, {marginTop: 30}]} >Touch Me</Text>
			</TouchableOpacity>
		    </View>
        );
    }
};

export default GsapLoading;

const styles = StyleSheet.create({
    box:{width:75, height:75, backgroundColor: "#f0ad4e", marginHorizontal:5},
    button:{fontSize:20, backgroundColor: "#337ab7", paddingVertical:10, paddingHorizontal:20, color:"#FFF", borderRadius:5}
})