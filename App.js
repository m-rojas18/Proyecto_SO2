import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Image } from 'react-native'; //COMPONENTE USADO PARA IMAGENES

export default function App() {
  //PIC. variable que estoy utilizando para guardar URL de imagen que quiero mostrar
  let pic = {
    uri: 'https://thumbs.dreamstime.com/b/dise%C3%B1o-del-confeti-de-la-celebraci%C3%B3n-41244387.jpg'
  };

  return (
    /*VIEW. Modifica el Estilo que se usa para lo que se muestra.
    todo lo que este encerrado dentro de VIEW tendra el estilo deseado*/
    //TEXT. Se usa para mostrar texto
    //IMAGE. Muestra una imagen. en este caso, se muestra la imagen guardada dentro de PIC
    //USAR PROPS. Se llama al nombre del prop para usarlo (Greeting) y se insertan sus parametro
    //BUTTON. Usado para crear botones
    //ALERT. Crea ventana con un mensaje adentro
    <View style={styles.container1}>
      <Greeting name = 'Miguel'/>
      <Greeting name = 'Jose'/>
      <Separator />
      <Text>Estoy usando React Native!</Text>
      <Separator />
      <Image source={pic} style={{width: 200, height: 110}}/>
      <Separator />
      <Button title="Boton 1" onPress={() => Alert.alert('Presionaste el boton 1')}/>
      <Separator />
      <Button title="Boton 2" color="#f194ff" onPress={() => Alert.alert('Presionaste el boton Rosa')} />
      <ShowButtons />
      <StatusBar style="auto" />
    </View>
  );
}

//PROPS. se puede crear un Prop para utilizarlo de la misma manera que se haria una funcion
class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hola {this.props.name}!</Text>
      </View>
    );
  }
}

class ShowButtons extends Component {
  render() {
    return (
      <View style={[styles.separator, {flexDirection: "row"}]}>
        <IndButton name = "Row 1"/>
        <IndButton name = "Row 2"/>
      </View>
    );
  }
}

class IndButton extends Component
{
  render() {
    return (
      <View style={styles.boton}>
        <Button title={this.props.name} onPress={() => Alert.alert('Presionaste el boton')}/>
      </View>
    );
  }
}

//SEPARATOR. Para agregar espacio entre componentes y demas
const Separator = () => (
  <View style={styles.separator} />
);

//Variable STYLES: Se utiliza StyleSheet para crear un estilo deseado
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  boton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "blue",
    marginHorizontal: 16,
  },
});