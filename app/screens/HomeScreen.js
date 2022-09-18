import * as React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

const Separator = () => (
  <View style={styles.separatorText} />
);

function HomeScreen ({ navigation }){
    return (
        <View style={styles.ventanaInicio}>
          <Text style={styles.textoVI}>Sistema de Archivos</Text>
          <Text style={styles.textoVI}>Proyecto - Miguel, Jose</Text>
          <Separator/>   
          <View style={{marginVertical: 10, borderBottomColor: '#737373'}}>
            <Button 
              title="Almacenar"
              onPress={() => navigation.navigate('Almacenar')}
            />
            <Separator/>
            <Button 
              title="Listar Archivos"
              onPress={() => navigation.navigate('Archivos')}
            />
            <Separator/>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  ventanaInicio: {
    flex:1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#ffe4c4',
  },
  textoVI: {
    fontSize: 22, 
    fontWeight: 'bold'
  },
  separatorText: {
    marginVertical: 8,
    borderBottomColor: '#ffe4c4',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
