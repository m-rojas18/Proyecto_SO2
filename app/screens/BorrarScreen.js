import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

const Separator = () => (
    <View style={styles.separatorText} />
);

//PANTALLA DE "BORRAR"
function BorrarScreen({ navigation }) {
  return (
    <View style={styles.Pantalla}>
      <Text style = {styles.textoVI}>BORRAR!</Text>
      <Separator/>
      <Button
        title="Volver a inicio"
        onPress={() => navigation.navigate('Home')}
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

export default BorrarScreen;