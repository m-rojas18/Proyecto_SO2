import * as React from 'react';
import { StyleSheet,StatusBar} from 'react-native';
import { useEffect } from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import ProveedorArchivos from './app/context/ProveedorArchivos';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
// Requests permissions for external directory



function App() {

  const escribirBinario = async () => {

    const permiso = await MediaLibrary.requestPermissionsAsync();
    if(permiso.granted){
      let fileUri = FileSystem.documentDirectory + "Hola.txt";
      //await FileSystem.writeAsStringAsync(fileUri,"Hola Mundo123", {encoding: FileSystem.EncodingType.UTF8});
      console.log(fileUri);
      const leer = await  FileSystem.readAsStringAsync(fileUri);
      console.log(leer);
      //const existeArchivo = FileSystem.getInfoAsync(FileSystem.documentDirectory + "Hola.txt");
      //console.log((await existeArchivo).size);
      /*const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);*/
      //
      

      //console.log((await existeArchivo).exists)
     
      //await FileSystem.deleteAsync(FileSystem.documentDirectory + "Hola.txt");
      //const leerDirectorio = FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
      //console.log(leerDirectorio);

    }
    
   
  }

  useEffect(() => {
    escribirBinario();
  });
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