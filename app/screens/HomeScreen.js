import * as React from 'react';
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import * as FileSystem from 'expo-file-system'

const Separator = () => (
  <View style={styles.separatorText} />
);

function HomeScreen ({ navigation }){

  const verInformacionDiscoDuro = async () =>{
      let disco = FileSystem.documentDirectory + "DiscoDuro";

        let info = await FileSystem.getInfoAsync(disco);
        let valorDisponible = ((104857600 - info.size) / 104857600 ) * 100;
        valorDisponible = valorDisponible.toFixed(2);
        let valorUsado = (info.size / 104857600 ) *  100;
        valorUsado = valorUsado.toFixed(2);
        Alert.alert('Información Disco Duro', `Espacio Total: 100 MBs\nEspacio Disponible: ${valorDisponible} MBs\nEspacio utilizado: ${valorUsado} MBs`);

      
  }
    return (
        <View style={styles.ventanaInicio}>
          <Text style={styles.textoVI}>Sistema de Archivos</Text>
          <Text style={styles.textoVI}>Proyecto - Miguel, Jose</Text>
          <Separator/>   
          <View style={{marginVertical: 10, borderBottomColor: '#737373'}}>
            <Button 
              title="Almacenar"
              onPress={() => navigation.navigate('Almacenar')}
            />
            <Separator/>
            <Button 
              title="Listar Archivos"
              onPress={() => navigation.navigate('Archivos')}
            />
            <Separator/>
            <Button 
            title = "Ver espacio DiscoDuro"
            onPress={() => verInformacionDiscoDuro()}
            />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  ventanaInicio: {
    flex:1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#ffe4c4',
  },
  textoVI: {
    fontSize: 22, 
    fontWeight: 'bold'
  },
  separatorText: {
    marginVertical: 8,
    borderBottomColor: '#ffe4c4',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
