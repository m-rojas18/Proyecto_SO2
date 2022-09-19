import React, { useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, Dimensions} from "react-native";
import { ArchivosContext } from '../context/ProveedorArchivos';
import { FontAwesome5 } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import { getInfoAsync } from 'expo-file-system';

function ArchivosScreen() {
    const {listaArchivos, setListaArchivos, addArchivo, eliminarArchivo} = useContext(ArchivosContext);
    const [avisoArchivo,setAvisoArchivo] = useState('');

    const renderItem = ({item})  => {
        if(item.id != 0){
            //Obtener informacion de archivo
            let typeFile;
            let string = item;
            if(string.includes('.png') || string.includes('.jpeg') || string.includes('.jpg')){
                typeFile = 'I';
            } else if (string.includes('.mp3')){   
                typeFile = 'A';
            } else {
                /*Es un txt*/
                typeFile = 'T'; 
            }
            return (
                <TouchableOpacity onPress={() => openFileIntent(item)}>
                <Item nombre={item}  tipoArchivo={typeFile}></Item>
                </TouchableOpacity>
            );
        }
    };

    /*
    const obtenerSizeArchivo = async (nombre) => {
        let fileUri = FileSystem.documentDirectory + "DiscoDuro/" + nombre;
        let datosArchivo = await FileSystem.getInfoAsync(fileUri);
        renderItem(nombre, datosArchivo);
    } 
    */
    const Item = ({nombre, tipoArchivo, sizeArchivo} ) => {
        return (
        <>
            <View style={styles.contenedorArchivo}> 
                <View style = {styles.leftContainer}>
                    <View style ={styles.thumbnail}>
                        <Text style={styles.thumbnailText}>{tipoArchivo}</Text>
                    </View>
                <View style={styles.nombreContainer}>
                    <Text numberOfLines={1} style={styles.informacionArchivo}> {nombre}</Text>
                </View>
            </View>
            <View style = {styles.rightContainer}>
                <TouchableOpacity  onPress={() => removeArchivo({nombre})}>
                    <FontAwesome5 name="trash" size={24} color="gray"/>
            </TouchableOpacity>
            </View>
        
            </View>
        
            <View style={styles.separator}/>
        </>
        );
    };
    const removeArchivo = (nombre) => {
        eliminarArchivo(nombre);
    }

    useEffect(() => {
        if( listaArchivos.length == 0 ){
            setAvisoArchivo('No hay archivos guardados');
        } else {
            //console.log(listaArchivos);
            let numArchivos = listaArchivos.length;
            setAvisoArchivo(`Numero de Archivos: ${numArchivos}`);
        };
        }
    ), [listaArchivos];

    const pressHandler = () => {
        Alert.alert("Aviso", "Presiono el Archivo",
        [{text: "Ok",}]);
    }
    const openFileIntent = (nombre) => 
    {
        try
        {
            let fileUri = FileSystem.documentDirectory + "DiscoDuro/" + nombre;
            FileSystem.getContentUriAsync(fileUri).then(cUri =>
            {
                IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
                data: cUri,
                flags: 1,
                type: cUri.mimeType

                });
            });
        }catch(e)
        {
            console.log(e.message);
        }
    }
    /*
    const openFile = (nombre) => 
    {
        let fileUri = FileSystem.documentDirectory + "DiscoDuro/" + nombre;
        //Alert.alert("Aviso", "Presiono el Archivo",
        //[{text: "Ok",}]);
        console.log(fileUri);
        //https://stackoverflow.com/questions/73233080/how-to-access-expo-file-system-filesystem-documentdirectory
        //LINKING
        FileSystem.getContentUriAsync(fileUri).then(cUri =>
            {
                console.log(cUri);
                let isSupported = Linking.canOpenURL(cUri);
                if(isSupported)
                {
                    Linking.openURL(cUri);
                }else
                {
                    Alert.alert("Can't open the specified URI");
                }
            });
    }
    */
    return (
        <View style={styles.ventana}>
            <Text style={styles.aviso}>{avisoArchivo}</Text>
            <FlatList 
                keyExtractor = {(item) => item}
                data = {listaArchivos}
                renderItem = {renderItem}
                />
        </View>
    );
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    ventana:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffe4c4',
    },
    contenedorArchivo:{
        height: 60,
        width: width - 5,   
        borderWidth : 0.5,
        flex:1,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor : '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      separadorContenedores: {
        width: width - 5,
        opacity: 0.3,
        height: 0.5,
        color: 'gray',
        alignSelf: 'center',
        marginTop: 10,
      },
      leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      },
    rightContainer :{
        flexBasis: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    informacionArchivo:{
        fontSize: 14,
        color: '#000',
    },
    thumbnail : {
        height: 50,
        backgroundColor : 'grey',
        flexBasis: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    thumbnailText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    titleContainer : {
        width: width -150,
        paddingLeft: 10,
        paddingRight: 10,
    },
    aviso:{
        justifyContent: 'flex-start',
        fontSize: 20,
        paddingBottom: 5,
    },
    sizeArchivo :{
        color: 'gray',
        opacity: 0.5,
        fontSize: 10,
    },
});

export default ArchivosScreen;
