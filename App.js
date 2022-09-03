import * as React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Button, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Arreglo de datos dummy
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Primero',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Segundo',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tercero',
  },
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
    </View>
  );
}

//PANTALLA DE "LISTAR ARCHIVOS"
function ArchivosScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe4c4' }}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>LISTA DE ARCHIVOS!</Text>
      <SafeAreaView style={estilo.container1}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <Separator/>
      <Button
        title="Volver a inicio"
        onPress={() => navigation.navigate('Home')}
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

//SEPARATOR. Para agregar espacio entre componentes y demas
const Separator = () => (
  <View style={estilo.separatorText} />
);

const Item = ({ title }) => (
  <View style={estilo.item}>
    <Text style={estilo.title}>{title}</Text>
  </View>
);

//Variable STYLES: Se utiliza StyleSheet para crear un estilo deseado
const estilo = StyleSheet.create({
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
});

export default App;