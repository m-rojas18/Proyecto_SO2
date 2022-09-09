import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";


const HomeScreen = () => {
    return (
        <View></View>
    );
}

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4c4' }}>
        <Text style = {{fontSize: 30, fontWeight: 'bold'}}>BIENVENIDO!</Text>
        <Separator/>
        <View style = {{marginVertical: 10, borderBottomColor: '#737373'}}>
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
          <Separator/>
          <Button
            title="MediaLibrary"
            onPress={() => navigation.navigate('Media')}
          />
          <Separator/>
          <Button
            title="DocumentPicker"
            onPress={() => navigation.navigate('Document')}
          />
          <Separator/>
        </View>
      </View>
    );
  }