import * as React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Button, View, Text, StatusBar, TouchableOpacity, Aler, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Arreglo de datos prueba
const ARCHIVOS = [
  {id: '1',title: 'Archivo.txt',},
  {id: '2',title: 'Musica.mp3',},
  {id: '3',title: 'Imagen.png',},
];



//NAVIGATION. ayuda con la navegacion entre paginas
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
      </View>
    </View>
  );
}

//PANTALLA DE EJEMPLO
/*
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4c4' }}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>DETAILS!</Text>
      <Button
        title="Volver a inicio"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
*/

//PANTALLA DE "ALMACENAR"
function AlmacenScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4c4' }}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>ALMACENAMIENTO!</Text>
      <Separator/>
      <Button
        title="Volver a inicio"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

//PANTALLA DE "LEER"
function LeerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4c4' }}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>LEER!</Text>
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

//PANTALLA DE "LISTAR ARCHIVOS"
function ArchivosScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => pressHandler()}>
      <Item title={item.title} />
    </TouchableOpacity>
  );
  /*
  <SafeAreaView style={estilos.container1}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <Separator/>
  */ 
     //<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4c4' }}>
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#ffe4c4'}}>
        <FlatList 
          keyExtractor = {(item) => item.id}
          data = {ARCHIVOS}
          renderItem = {renderItem}
        />
    </View>
  );
}

//PANTALLA DE "BORRAR"
function BorrarScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4c4' }}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>BORRAR!</Text>
      <Separator/>
      <Button
        title="Volver a inicio"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

//STACK. Mantiene un historial de las pantallas que se han visitado
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Almacenar" component={AlmacenScreen}/>
        <Stack.Screen name="Leer" component={LeerScreen}/>
        <Stack.Screen name="Archivos" component={ArchivosScreen}/>
        <Stack.Screen name="Borrar" component={BorrarScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const pressHandler = () => {
  Alert.alert("Aviso", "Presiono el Archivo",
  [{text: "Ok",}]);
}
//SEPARATOR. Para agregar espacio entre componentes y demas
const Separator = () => (
  <View style={estilos.separatorText} />
);

const Item = ({ title }) => (
  /*<View style={estilos.item}>
    <Text style={estilos.title}>{title}</Text>
  </View>*/
  <View style={estilos.contenedorArchivo}> 
    <Text style={estilos.informacionArchivo}> {title}</Text>
  </View>
);

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
  contenedorArchivo:{
    height: 60,   
    paddingBottom: 5,
    marginTop: 5,
    flex: 1,
    backgroundColor : '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  informacionArchivo:{
    fontSize: 16,
  }

});

export default App;