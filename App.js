import * as React from 'react';
import * as MediaLibrary from 'expo-media-library'
import { StyleSheet,StatusBar} from 'react-native';
import {DocumentPicker, ImagePicker, Permissions} from 'expo-document-picker';
import AppNavigator from './app/navigation/AppNavigator';
import ProveedorArchivos from './app/context/ProveedorArchivos';

//NAVIGATION. ayuda con la navegacion entre paginas

/*
function MediaScreen({ navigation }) {
  _mediaLibraryAsync = async () => {
    let { status } = await MediaLibrary.requestPermissionsAsync()
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: ['photo', 'video'],
    })
    let video = await MediaLibrary.getAssetInfoAsync(media.assets[0])

    console.log(video);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4c4' }}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Media Library prueba</Text>
      <Separator/>
      <Button
        title="Volver a inicio"
        onPress={() => navigation.navigate('Home')}
      />
      <Separator/>
      <Button
          onPress={this._mediaLibraryAsync}
          title="Do MediaLibrary Stuff"
        />
    </View>
  );
}*/
/*
function DocumentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4c4' }}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Document Picker Test</Text>
      <Button
        title="Volver a inicio"
        onPress={() => navigation.navigate('Home')}
      />
      <Separator/>
      </View>
  );
}
*/

function App() {
  return (
      <AppNavigator />

  );
}
//Variable STYLES: Se utiliza StyleSheet para crear un estilo deseado
const estilos = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
    backgroundColor: '#ffe4c4',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',      
    paddingBottom: 12,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separatorText: {
    marginVertical: 8,
    borderBottomColor: '#ffe4c4',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  separatorButton: {
    marginVertical: 10,
    borderBottomColor: '#737373',
  },
  boton: {
    marginVertical: 10,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
  },
  tituloPantalla: {
    fontWeight: 'bold'
  },

  

});

export default App;