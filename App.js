import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import Alert from './src/pages/Alert';

export default function App() {
  
  const logar = () => {
    alert("logando...")
  }

  const deslogar = () => {
    alert("deslogando...")
  }


  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A690" barStyle="light-content" />
      <Alert type='primary' icone='login' posicao='direita' onPress={logar} >Entrar</Alert>
      <Alert icone='logout' onPress={deslogar}>Logout</Alert>

      {/* <Routes /> */}
    </NavigationContainer>
  );
}

