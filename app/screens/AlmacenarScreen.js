import React, {Component, createContext} from 'react'
import { useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Image, Alert, TextInput} from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import ProveedorArchivos from '../context/ProveedorArchivos';
import { ArchivosContext } from '../context/ProveedorArchivos';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { StorageAccessFramework } from 'expo-file-system';
import * as Linking from 'expo-linking';

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
  const [placeHolder, setPlaceHolder] = useState ([""]);

  const elegirArchivo = async () => {
    const result = await DocumentPicker.getDocumentAsync({
                  type: ['*/*'],
                  copyToCacheDirectory: false});
    /*La opcion de elegir multiples archivos esta falso por Default */
    setFileResponse(result);
    setPlaceHolder(result.name);
    console.log(result);
    //const resp = await FileSystem.getInfoAsync(result.uri);
    //console.log(resp);
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

    /*Validacion de que el nombre no sea igual*/


    const permiso = await MediaLibrary.requestPermissionsAsync();
    if(permiso.granted){
      /*Primero, mover archivos al documentDirectory*/ 
      let discoUri = await FileSystem.documentDirectory + "DiscoDuro/" + fileResponse.name;
      await FileSystem.copyAsync({from: fileResponse.uri, to: discoUri});

      //console.log('\n\n');
      console.log(fileResponse.uri);
      console.log('\n\n');
      console.log(discoUri);

      /*Eliminar archivo en el dispositivo*/
      //await StorageAccessFramework.deleteAsync(fileResponse.uri);
      
      await FileSystem.getContentUriAsync(discoUri).then(cUri =>
        {
          discoUri = cUri;
          console.log(discoUri);
        });
      console.log(await Linking.canOpenURL(discoUri));
      let isSupported = await Linking.canOpenURL(discoUri);
      if(isSupported)
      {
        console.log('\n\n');
        console.log(discoUri);
        await Linking.openURL(discoUri);
      }else
      {
        Alert.alert("Can't open ${discoUri}");
      }
      
    }
      
     /*
      const a = FileSystem.readAsStringAsync(leerImagen, {encoding: FileSystem.EncodingType.Base64});
      console.log(a);
      console.log(leerImagen);
      const leer = await  FileSystem.readAsStringAsync(discoUri);
      console.log(leer);
      */
      //await FileSystem.writeAsStringAsync(fileUri,fileResponse, {encoding: FileSystem.EncodingType.Base64});
      /*let fileUri = FileSystem.documentDirectory + "Hola.bin";
      
      console.log(fileUri);*/
      //const hola = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
      //console.log(hola);
      
      
      //const existeArchivo = FileSystem.getInfoAsync(FileSystem.documentDirectory + "Hola.txt");
      //console.log((await existeArchivo).size);
      /*const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);*/
      //
      

      //console.log((await existeArchivo).exists)
     
      //await FileSystem.deleteAsync(FileSystem.documentDirectory + "Hola.txt");
      //const leerDirectorio = FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
      //console.log(leerDirectorio);

    }
    
   
  
  
  /*
  const AlmacenarArchivo = async () => {
    const asset = await MediaLibrary.createAssetAsync(fileResponse.uri);

    console.log(asset.creationTime);
    const album = await getAlbumAsync('Descargas');
    if(album == null){
      await createAlbumAsync('Descargas', asset, false);
    } else {
      console.log("Entro");
      await addAssetsToAlbumAsync([asset], album, false);
    }
  }
  */
  //const permiso = useContext(ArchivosContext);

  return (
          <View style={styles.Pantalla}>
            <Separator/>
                <View style={styles.cajaNombreArchivo}> 
                  <Text >{placeHolder}</Text>
                </View>
                <Separator/>
                  <Button
                  title="Seleccionar archivo"
                  onPress={elegirArchivo}
                  />
                <Separator/>
                <Button
                title="Almacenar Archivo"
                onPress={AlmacenarArchivo}
                />
                <Separator/>
          </View>
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
      input : {
        borderWidth: 1,
        borderColor: "#575DD9",
        alignSelf: 'stretch',
        margin: 32,
        Height: 64,
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 24,
        fontWeight: "300",
      },
      cajaNombreArchivo :{
        paddingHorizontal: 90,
        paddingVertical: 10,
        borderWidth: 3,
        borderColor: '#000',
        borderStyle: 'dotted',
      },
    });

export default AlmacenScreen;