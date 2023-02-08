import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";


export default function Alert() {
    const orientation = useDeviceOrientation()
    console.log('orientation is:', orientation)
    return (
        <View style={styles.container}>
        </View>

);
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a699'
    },
})