import React, { useState } from "react";
import { View, StyleSheet, Text} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import icon from "../../config/icon"; 

function Alert({type, icone, posicao, children, onPress}) {
    // const orientation = useDeviceOrientation()
    // console.log('orientation is:', orientation)
    return (
        <View style={styles.container}>
          {/* <View style={styles.barras}>
            <View style={styles.barra1} />
            <View style={styles.barra2} />
            <View style={styles.barra3} />
          </View> */}


          <TouchableOpacity  onPress={onPress}  style={[styles.botao, {backgroundColor: colors.bg[type], flexDirection: icon[posicao]}]}>
          <MaterialCommunityIcons name={icone} size={23} color="black"/>
          <Text style={[styles.text, {color: colors.text[type]}]}>
                  {children}
                </Text>
          </TouchableOpacity >

        </View>

);
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a699',
        alignItems: 'center',
        justifyContent: 'center'
    },

    botao:{
      backgroundColor: colors.primary,
      borderRadius: 10,
      padding: 10,
      justifyContent: 'center' ,
      alignItems: 'center',
      // flexDirection:"row",

    },

    text:{
      color:'white'
    }

    // barras:{
    //   flex:1,
    //   justifyContent:'center',
    //   alignItems: 'center',
    // },

    // barra1:{
    //   width: 50,
    //   height: 50,
    //   backgroundColor: 'powderblue',
    // },
    // barra2:{
    //   width: 100,
    //   height: 100,
    //   backgroundColor: 'skyblue',
    // },

    // barra3:{
    //   width: 150,
    //   height: 150,
    //   backgroundColor: 'steelblue',
    // },
})

Alert.defaultProps ={
  type: 'secondary',
  posicao: 'esquerda',
  
}

export default Alert;