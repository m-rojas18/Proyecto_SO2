import * as React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";


const Separator = () => (
    <View style={styles.separatorText} />
);

//PANTALLA DE "LEER"
function LeerScreen({ navigation }) {
    return (
      <View style={styles.Pantalla}>
        <Text style = {styles.textoVI}>LEER!</Text>
        <Separator/>
        <Button
          title="Volver a inicio"
          onPress={() => navigation.navigate('Home')}
        />
        <Separator/>
        <Button
        title="Escoger archivo"
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

export default LeerScreen;