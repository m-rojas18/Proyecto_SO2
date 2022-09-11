import React, {Component, createContext} from 'react'
import { useState, useContext} from 'react';
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import ProveedorArchivos from '../context/ProveedorArchivos';
import { ArchivosContext } from '../context/ProveedorArchivos';
export const AlmacenScreen = () =>{
    
  const Separator = () => (
    <View style={styles.separatorText} />
  );

  

  const verificarPermiso = isGranted => {


    Alert.alert({isGranted});
   /* if(isGranted == 'false'){
      Alert.alert("Aviso", "No se a dado el permiso para acceder al sistema de archivos.",
      [{text: "Ok",}]);
    } else {
      Alert.alert("Hola");
      //elegirArchivo();
    }*/
  }
    
  /* Esta variable almacenara todas las respuestas que obtenemos de DocumentPicker view despues de seleccionar
  un archivo*/ 
  const [fileResponse, setFileResponse] = useState([]);

  const elegirArchivo = async () => {
    const result = await DocumentPicker.getDocumentAsync({
    type: ['audio/*', 'image/*', 'text/plain'],
    copyToCacheDirectory: false,});
    /*La opcion de elegir multiples archivos esta falso por Default */
    setFileResponse(result);
    console.log(result);
  };

  const permiso = useContext(ArchivosContext);

  return (
    <ProveedorArchivos>
          <View style={styles.Pantalla}>
            <Separator/>
                <Button
                title="Seleccionar archivo"
                onPress={elegirArchivo}
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