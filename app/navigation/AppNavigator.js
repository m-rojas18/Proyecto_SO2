import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import ArchivosScreen from "../screens/ArchivosScreen";
import AlmacenScreen from "../screens/AlmacenarScreen";
import BorrarScreen from "../screens/BorrarScreen";
import LeerScreen from "../screens/LeerScreen";


//STACK. Mantiene un historial de las pantallas que se han visitado
const Stack = createNativeStackNavigator();

//Configure StackNavigator
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Almacenar" component={AlmacenScreen} />
                <Stack.Screen name="Leer" component={LeerScreen}/>
                <Stack.Screen name="Archivos" component={ArchivosScreen}/>
                <Stack.Screen name="Borrar" component={BorrarScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;