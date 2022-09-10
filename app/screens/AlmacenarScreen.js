import * as React from 'react';
import { useState, useCallback} from 'react';
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import * as DocumentPicker from 'expo-document-picker';

const Separator = () => (
    <View style={styles.separatorText} />
);

//PANTALLA DE "ALMACENAR"
function AlmacenScreen (){

    /* Esta variable almacenara todas las respuestas que obtenemos de DocumentPicker view despues de seleccionar
    un archivo*/ 
    const [fileResponse, setFileResponse] = useState([]);
    const elegirArchivo = async () => {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['audio/*', 'image/*', 'text/plain'],
      });
        setFileResponse(result);
    };

  return (
    <View style={styles.Pantalla}>
      {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      ))}
      <Separator/>
      <Button
        title="Seleccionar archivo"
        onPress={(elegirArchivo)}
      />
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
  });

export default AlmacenScreen;