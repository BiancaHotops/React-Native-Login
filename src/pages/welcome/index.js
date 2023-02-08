import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';

export default function Welcome(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY" 
                    source={require('../../assets/logo.png')}
                    style={{ width:'100%', height: '200px'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} style={styles.containerForm}>
                <Text style={styles.title}>Com muita dedicação você vai longe! </Text>
                <Text style={styles.text}>Faça o Login para começar.</Text>

                <TouchableOpacity style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                </Animatable.View>

            </View>


    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a699'
    },

    containerLogo:{
        flex:2,
        justifyContent:'center',
        backgroundColor:'#38a690',
        alignItems: 'center'
    },

    containerForm: {
        flex: 1,
        backgroundColor:'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingStart: '10%',
        paddingEnd:'10%',
        

    },

    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },

    text: {
        color:'@alalal'
    },

    button:{
        position:'absolute',
        backgroundColor:'#38a690',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems:'center',
        justifyContent: 'center' 
    },

    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    
    },

})