import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';

export default function Inicial() {
    const [ number, setNumber ] = useState(1);
    const [exibindo, setExibir] = useState(false)
    const navigation = useNavigation();
    const getRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber)
        setNumber(randomNumber);
        setExibir(!exibindo)
    }


    return (
            <View style={styles.container}>
                
                {exibindo ? <Image style={styles.imagens} source={{uri: `https://picsum.photos/id/${number}/200/300`, width: '200px', height:'200px'}} /> 
                 : null}
                
                <TouchableOpacity style={styles.button} onPress={getRandomNumber}>
                <Animatable.Image animation="fadeInUp"
                source={require('../../assets/botao.png')}
                style={{ width:'100%', height: '100px'}}
                resizeMode="contain" >
                </Animatable.Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonn}
                onPress={ () => navigation.navigate('Alert')}>
                    <Text style={styles.buttonnText}>New page</Text>
                </TouchableOpacity>
            </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a690',
        justifyContent:'center',
        alignItems: 'center'

    },  

    button:{
        width:'30%',
        justifyContent: 'center' ,
        alignItems: 'center',
        alignSelf: 'center',

    },

    imagens:{
        marginTop: 30
    },

    buttonn:{
        position:'absolute',
        backgroundColor:'white',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems:'center',
        justifyContent: 'center' 
    },

    buttonnText:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    
    }
})