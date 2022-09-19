import * as React from 'react';
import { StyleSheet,StatusBar, Alert} from 'react-native';
import { useEffect } from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import ProveedorArchivos, { ArchivosContext }from './app/context/ProveedorArchivos';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

function App() {

  const escribirDirectorio= async () => {

      let discUri = FileSystem.documentDirectory + "DiscoDuro";
      let verificar = await FileSystem.getInfoAsync(discUri);
      if(!verificar.exists){
        await FileSystem.makeDirectoryAsync(discUri);
        Alert.alert("Aviso", 'Se ha generado el disco duro con un espacio de 100MBs');
      }
     
      await MediaLibrary.getPermissionsAsync();
   
  }

  useEffect(() => {
    escribirDirectorio();
  });
  return (
    <ProveedorArchivos>
      <AppNavigator />
    </ProveedorArchivos>
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