import * as React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";

const Separator = () => (
  <View style={styles.separatorText} />
);

function HomeScreen ({ navigation }){
    return (
        <View style={styles.ventanaInicio}>
          <Text style={styles.textoVI}>BIENVENIDO!</Text>
          <Separator/>   
          <View style={{marginVertical: 10, borderBottomColor: '#737373'}}>
            <Button 
              title="Almacenar"
              onPress={() => navigation.navigate('Almacenar')}
            />
            <Separator/>
            <Button 
              title="Leer"
              onPress={() => navigation.navigate('Leer')}
            />
             <Separator/>
            <Button 
              title="Listar Archivos"
              onPress={() => navigation.navigate('Archivos')}
            />
            <Separator/>
            <Button 
              title="Borrar"
              onPress={() => navigation.navigate('Borrar')}
            />
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
    fontSize: 30, 
    fontWeight: 'bold'
  },
  separatorText: {
    marginVertical: 8,
    borderBottomColor: '#ffe4c4',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
