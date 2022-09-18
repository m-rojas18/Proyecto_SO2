import React, { useContext, useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Alert} from "react-native";
import { ArchivosContext } from '../context/ProveedorArchivos';
import { FontAwesome5 } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Linking from 'expo-linking'
import * as IntentLauncher from 'expo-intent-launcher';

function ArchivosScreen() {
    const {listaArchivos, setListaArchivos, addArchivo, eliminarArchivo} = useContext(ArchivosContext);

    const [avisoArchivo,setAvisoArchivo] = useState('');

    const renderItem = ({item})  => {
        if(item.id != 0){
            return (
                <TouchableOpacity onPress={() => openFileIntent(item)}>
                <Item nombre={item}></Item>
                </TouchableOpacity>
            );
        }
    };

    const Item = ({nombre} ) => {
        return (<View style={styles.contenedorArchivo}> 
                   <Text style={styles.informacionArchivo}> {nombre}</Text>
                   <TouchableOpacity style={{flex:0.10}} onPress={() => removeArchivo({nombre})}>
                        <FontAwesome5 name="trash" size={24} color="gray"/>
                   </TouchableOpacity>
                </View>
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
                });
                console.log('SUCCESS!');
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

const styles = StyleSheet.create({
    ventana:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffe4c4',
    },
    contenedorArchivo:{
        height: 60,   
        borderWidth : 0.5,
        borderColor: "grey",
        flex:1,
        flexDirection: 'row',
        backgroundColor : '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
    informacionArchivo:{
        fontSize: 14,
        flex:0.90,
        color: '#000',
    },
    aviso:{
        justifyContent: 'flex-start',
        fontSize: 20,
        paddingBottom: 5,
    },
});

export default ArchivosScreen;
