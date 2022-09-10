import * as React from 'react';
import { useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import ProveedorArchivos, { ArchivosContext } from '../context/ProveedorArchivos';

const Separator = () => (
    <View style={styles.separatorText} />
);

function AlmacenScreen (){
    
    
    /* Esta variable almacenara todas las respuestas que obtenemos de DocumentPicker view despues de seleccionar
    un archivo*/ 
    const [fileResponse, setFileResponse] = useState([]);
    const elegirArchivo = async () => {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['audio/*', 'image/*', 'text/plain'],
        copyToCacheDirectory: false,});
        /*La opcion de elegir multiples archivos esta falso por Default */
      setFileResponse(result);
      Alert.alert(result.uri);
    };

  return (
    <ProveedorArchivos>
      <View style={styles.Pantalla}>
        <Separator/>
        <Button
          title="Seleccionar archivo"
          onPress={(elegirArchivo)}
        />
      </View>
    </ProveedorArchivos>
  );
}

const styles = StyleSheet.create({
    Pantalla: {
      flex:1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#ffe4c4',
    },
    textoVI: {
      fontSize: 30, 
      fontWeight: 'bold'
    },
    separatorText: {
        marginVertical: 8,
        borderBottomColor: '#ffe4c4',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    uri: {
      paddingBottom: 8,
      paddingHorizontal: 18,
    },
  });

export default AlmacenScreen;