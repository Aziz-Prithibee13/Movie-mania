import React, { Component, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { gsap, Back, Elastic } from 'gsap-rn';
import Lottie from 'lottie-react-native'
import LottieView from 'lottie-react-native'

const GsapLoading = (props) => {
    const { loading, styles } = props
    let lottieRef = useRef(null)
    useEffect(() => {
        let func = async () => {
            gsap.set(lottieRef, { style: { left: 0, top: 0, opacity: 0.5 }, transform: { scale: 1 } });
            gsap.to(lottieRef, { duration: 1, style: { left: 0, top: 0, opacity: 1 }, transform: { scale: 2 }, ease: Elastic.easeOut, stagger: { amount: 0.3 } });
            /* 
            loading ? gsap.to(lottieRef.current, { duration: 0.5, opacity: 1, scale: 1.5, ease: Back.easeInOut }) : gsap.to(lottieRef.current, { duration: 0.5, opacity: 0, scale: 1, ease: Back.easeInOut }); */
        }
        setInterval(() => {
            func()
        }, 2000)
    }, [])


    return (
        <View ref={ref => lottieRef = ref}>
            <LottieView style={styles.loadingAnimation} source={require('../../../assets/animation_ljzacpcx.json')} autoPlay loop />
        </View>
    )

}

export default GsapLoading;

const styles = StyleSheet.create({
    box: { width: 75, height: 75, backgroundColor: "#f0ad4e", marginHorizontal: 5 },
    button: { fontSize: 20, backgroundColor: "#337ab7", paddingVertical: 10, paddingHorizontal: 20, color: "#FFF", borderRadius: 5 }
})