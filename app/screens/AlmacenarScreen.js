import React, {Component, createContext} from 'react'
import { useState, useContext} from 'react';
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import ProveedorArchivos from '../context/ProveedorArchivos';
import { ArchivosContext } from '../context/ProveedorArchivos';
import { documentDirectory, EncodingType, writeAsStringAsync } from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

function AlmacenScreen() {
    
  const Separator = () => (
    <View style={styles.separatorText} />
  );

  

 // const verificarPermiso = isGranted => {


   /* if(isGranted == 'false'){
      Alert.alert("Aviso", "No se a dado el permiso para acceder al sistema de archivos.",
      [{text: "Ok",}]);
    } else {
      Alert.alert("Hola");
      //elegirArchivo();
    }*/
//  }
    
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
    /*
    {Imagen
        "mimeType": "image/jpeg", "name": "Screenshot_20220911-105253_Package installer.jpg", "size": 222554, 
      "type": "success", "uri": "content://com.android.providers.media.documents/document/image%3A7705"
    }
    Archivo musica
    {"mimeType": "audio/mpeg", "name": "Over the Horizon", "size": 4685824, "type": "success", 
    "uri": "content://com.android.providers.media.documents/document/audio%3A14"}
    Archivo texto
     {"mimeType": "text/plain", "name": "practice.txt", "size": 5205, 
     "type": "success", "uri": "content://com.android.providers.downloads.documents/document/1036"}
    */ 
  };
  const AlmacenarArchivo = async () => {
    const asset = await MediaLibrary.createAssetAsync(fileResponse.uri);

    console.log(asset.creationTime);/*
    const album = await getAlbumAsync('Descargas');
    if(album == null){
      await createAlbumAsync('Descargas', asset, false);
    } else {
      console.log("Entro");
      await addAssetsToAlbumAsync([asset], album, false);
    }*/
  }

  //const permiso = useContext(ArchivosContext);

  return (
    <ProveedorArchivos>
          <View style={styles.Pantalla}>
            <Separator/>
                <Button
                title="Seleccionar archivo"
                onPress={elegirArchivo}
                />
                 <Separator/>
                <Button
                title="Almacenar archivo"
                onPress={AlmacenarArchivo}
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