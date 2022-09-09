import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Alert} from "react-native";

//Arreglo de datos prueba
const ARCHIVOS = [
    {id: '1',title: 'Archivo.txt',},
    {id: '2',title: 'Musica.mp3',},
    {id: '3',title: 'Imagen.png',},
  ];
  
const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => pressHandler()}>
        <Item title={item.title} />
    </TouchableOpacity>
);

const Item = ({ title }) => (
    <View style={styles.contenedorArchivo}> 
      <Text style={styles.informacionArchivo}> {title}</Text>
    </View>
  );

const pressHandler = () => {
    Alert.alert("Aviso", "Presiono el Archivo",
    [{text: "Ok",}]);
}

function ArchivosScreen({ navigation }) {
    return (
        <View style={styles.ventana}>
            <FlatList 
                keyExtractor = {(item) => item.id}
                data = {ARCHIVOS}
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
        paddingBottom: 5,
        marginTop: 5,
        flex: 1,
        backgroundColor : '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center'
      },
    informacionArchivo:{
        fontSize: 16,
    },
});

export default ArchivosScreen;
