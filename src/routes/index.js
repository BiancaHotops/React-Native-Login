import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/welcome'
import SignIn from '../pages/SignIn'
import Inicial from '../pages/Inicial'
import Alert from '../pages/Alert'

const Stack = createNativeStackNavigator();


export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome} 
            />

        <Stack.Screen
            name="SignIn"
            component={SignIn} 
            />
        
        <Stack.Screen
            name="Inicial"
            component={Inicial} 
            />
        <Stack.Screen
            name="Alert"
            component={Alert} 
            />
        
        

        </Stack.Navigator>
    );
}