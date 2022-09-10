import * as React from 'react';
import { useState, useCallback} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import * as DocumentPicker from 'expo-document-picker';

const Separator = () => (
    <View style={styles.separatorText} />
);

//PANTALLA DE "ALMACENAR"
function AlmacenScreen (){
    const [fileResponse, setFileResponse] = useState([]);
    const handleDocumentSelection = useCallback(async () => {
        try {
          const response = await DocumentPicker.getDocumentAsync({})
          setFileResponse(response);
        } catch (err) {
          console.warn(err);
        }
      }, []);

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
        onPress={(handleDocumentSelection)}
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
  });

export default AlmacenScreen;