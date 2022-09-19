import React from 'react'
import { useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Image, Alert, PermissionsAndroid} from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import { ArchivosContext } from '../context/ProveedorArchivos';
import * as FileSystem from 'expo-file-system';

function AlmacenScreen() {
  const {
    listaArchivos,
    addArchivo,
    eliminarArchivo,
    revisarNombreRep,
  } = useContext(ArchivosContext);

  const Separator = () => (
    <View style={styles.separatorText} />
  );
  const validacionAlert= (mensaje) => {
    Alert.alert("Error", mensaje,
        [{text: 'Ok',},]);
  }

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
  const [placeHolder, setPlaceHolder] = useState ('Nombre de Archivo');

  const elegirArchivo = async () => {
    const result = await DocumentPicker.getDocumentAsync({
                  type: ['audio/mpeg','image/*', 'text/plain'],
                  copyToCacheDirectory: false});
    if(result.type != 'cancel'){
      setFileResponse(result);
      setPlaceHolder(result.name);
    } else {
      setPlaceHolder('Nombre de Archivo');
    }
    /*La opcion de elegir multiples archivos esta falso por Default */
    
    //console.log(result);
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

    let validar = true;
    //1. Validar que haya un archivo seleccionado
    if(placeHolder != 'Nombre de Archivo'){
      //Se selecciono un arcivo
    }  else {
      validar = false;
      validacionAlert('No se ha seleccionado un archivo para almacenar.');
    }

    //2. Validacion de que el nombre no sea igual
    if(revisarNombreRep(fileResponse.name)){
      validar = false;
      validacionAlert('Un archivo en el disco ya tiene ese nombre, cambiarlo para poder almacenar.');
    } else {/*El archivo no esta en el disco*/}

    /*3. Revisar el tamaño del Directorio y si pase de los 100 MBs*/
    let directoryInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + "DiscoDuro");
    //100 MB-> 104857600 bytes (en binario)
    if(directoryInfo.size < 104857600){
      //No ha llegado al limite de 100 MBs

      /*4. Revisar que archivo a almacenar no haga que se pase de 100 MBs*/
      let verificarEspacio = directoryInfo.size + fileResponse.size;
      let valorDisponible = ((104857600 - directoryInfo.size) / 104857600 ) * 100;
      valorDisponible = valorDisponible.toFixed(2);
      let sizeArchivo = (fileResponse.size / 104857600) * 100;
      sizeArchivo = sizeArchivo.toFixed(2); 
      if(verificarEspacio > 104857600){
        validar = false;
        validacionAlert(`El disco duro no tiene suficiente espacio para almacenar el archivo.\nEspacio disponible: ${valorDisponible} MBs \nTamaño archivo: ${sizeArchivo} MBs`);
      }

    } else {
      validar = false;
      validacionAlert('El disco de la aplicación ya llego a su limite de 100 MBs');
    }

    if(validar){
      let discoUri = FileSystem.documentDirectory + "DiscoDuro/" + fileResponse.name;
      //Paso las 3 validaciones, almacenar en app y actualizar lista global
      await FileSystem.copyAsync({from: fileResponse.uri, to: discoUri});
      addArchivo(fileResponse.name);
      Alert.alert("Confirmación", 'Se logro almacenar el archivo exitosamente!',
      [{text: 'Ok',},]);
      //Limpiar campo de archivo seleccionado
      setFileResponse('');
      setPlaceHolder('Nombre de Archivo');
    }
    /*Primero, mover archivos al documentDirectory*/
    }

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