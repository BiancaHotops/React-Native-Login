import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";


export default function Alert() {
    const orientation = useDeviceOrientation()
    console.log('orientation is:', orientation)
    return (
        <View style={styles.container}>
          <View style={styles.barras}>
            <View style={styles.barra1} />
            <View style={styles.barra2} />
            <View style={styles.barra3} />
          </View>
        </View>

);
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a699'
    },

    barras:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
    },

    barra1:{
      width: 50,
      height: 50,
      backgroundColor: 'powderblue',
    },
    barra2:{
      width: 100,
      height: 100,
      backgroundColor: 'skyblue',
    },

    barra3:{
      width: 150,
      height: 150,
      backgroundColor: 'steelblue',
    },
})